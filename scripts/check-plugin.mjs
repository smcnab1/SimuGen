import { strict as assert } from 'node:assert'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, posix } from 'node:path'
import Ajv2020 from 'ajv/dist/2020.js'
import { load } from 'js-yaml'

const schemaUrl = 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json'
const schemaHash = '0a4aad95ce337878ad38802ebf0daa3fde76abe3f65400c86bcbb1ec0b3ab883'
const skills = [
  'debrief-clinical-simulation',
  'generate-clinical-scenario',
  'review-clinical-scenario',
  'run-clinical-simulation',
]
const references = ['clinical-evidence.md', 'educational-standards.md', 'scenario-structure.md']
  .map(name => `skills/generate-clinical-scenario/references/${name}`)
const packageFiles = [
  'LICENSE.md',
  'assets/logo.png',
  'plugin.json',
  ...skills.flatMap(skill => [`skills/${skill}/SKILL.md`, `skills/${skill}/agents/openai.yaml`]),
  ...references,
].sort()

const read = file => readFileSync(file, 'utf8')
const json = file => JSON.parse(read(file))
const isText = (value, max = Infinity) =>
  typeof value === 'string' && value.trim().length > 0 && value.length <= max

function parseYaml(source, file) {
  return load(source, { filename: file })
}

function checkLinks(file, content, readTarget, targetExists, withinPackage = false) {
  const links = new Set()
  for (const [, href] of content.matchAll(/\]\(([^\s)]+)\)/g)) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue
    const [path, fragment] = href.split('#').map(decodeURIComponent)
    const target = path ? posix.join(posix.dirname(file), path) : file
    assert(!path.startsWith('/') && target !== '..' && !target.startsWith('../') && targetExists(target),
      `${file}: unresolved local link ${href}`)
    if (fragment) {
      const headings = [...readTarget(target).matchAll(/^#{1,6} (.+)$/gm)]
      const anchors = headings.map(([, heading]) => heading.trim().toLowerCase()
        .replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-'))
      assert(anchors.includes(fragment), `${file}: unresolved heading ${href}`)
    }
    links.add(target)
  }
  if (withinPackage && file.endsWith('/SKILL.md')) {
    for (const reference of references) {
      assert(links.has(reference), `${file}: missing shared reference link to ${reference}`)
    }
  }
}

async function checkPackage(revision) {
  // Pin the bytes of the published schema so upstream changes cannot silently alter validation.
  const response = await fetch(schemaUrl, { signal: AbortSignal.timeout(20_000) })
  assert(response.ok, `Cannot fetch the published plugin schema: HTTP ${response.status}`)
  const schema = Buffer.from(await response.arrayBuffer())
  assert.equal(createHash('sha256').update(schema).digest('hex'), schemaHash,
    'Published 1.0.0 schema checksum changed. Verify upstream before updating the pin.')
  const validate = new Ajv2020({ allErrors: true }).compile(JSON.parse(schema))

  const temporary = mkdtempSync(join(tmpdir(), 'simugen-qa-'))
  try {
    const archive = join(temporary, 'simugen.zip')
    const tree = `${revision}:plugin`
    const entries = execFileSync('git', ['ls-tree', '-r', '--full-tree', tree], { encoding: 'utf8' }).trim().split('\n')
    assert(entries.every(entry => entry.startsWith('100644 blob ')),
      'Plugin must contain only regular, non-executable files')
    assert.deepEqual(entries.map(entry => entry.split('\t')[1]).sort(), packageFiles,
      'Committed plugin tree differs from the expected package contents')
    execFileSync('git', ['archive', '--format=zip', `--output=${archive}`, tree])
    execFileSync('unzip', ['-tq', archive])
    const zippedFiles = execFileSync('unzip', ['-Z1', archive], { encoding: 'utf8' })
      .trim().split('\n').filter(name => !name.endsWith('/')).sort()
    assert.deepEqual(zippedFiles, packageFiles, 'Release ZIP differs from the expected package contents')
    const extract = file => execFileSync('unzip', ['-p', archive, file])
    const readPackaged = file => extract(file).toString('utf8')

    const manifest = JSON.parse(readPackaged('plugin.json'))
    assert(validate(manifest), `plugin.json: ${JSON.stringify(validate.errors)}`)
    assert.equal(manifest.name, 'simugen')
    assert(isText(manifest.description), 'plugin.json: empty description')
    assert.match(manifest.version, /^\d+\.\d+\.\d+$/)
    assert.equal(manifest.version, json('package.json').version, 'Plugin and npm versions differ')
    const lock = json('package-lock.json')
    assert.equal(manifest.version, lock.version, 'Plugin and lockfile versions differ')
    assert.equal(manifest.version, lock.packages[''].version, 'Plugin and lockfile root versions differ')
    assert(read('submission/release-notes.md').startsWith(`# SimuGen v${manifest.version} `),
      'Submission notes and plugin versions differ')
    assert.equal(manifest.license, 'MIT')
    assert.equal(readPackaged('LICENSE.md'), read('LICENSE.md'), 'Packaged licence differs from the repository licence')

    const overlay = manifest.extensions?.['com.openai']
    assert.deepEqual(Object.keys(overlay ?? {}), ['interface'], 'Expected a skills-only OpenAI overlay')
    const ui = overlay.interface
    assert(ui && typeof ui === 'object' && !Array.isArray(ui), 'plugin.json: expected an interface object')
    for (const field of ['displayName', 'shortDescription', 'longDescription', 'developerName', 'category']) {
      assert(isText(ui[field]), `plugin.json: missing interface.${field}`)
    }
    for (const field of ['websiteURL', 'supportURL', 'privacyPolicyURL', 'termsOfServiceURL']) {
      assert(URL.canParse(ui[field]) && new URL(ui[field]).protocol === 'https:',
        `plugin.json: interface.${field} must be an HTTPS URL`)
    }
    for (const field of ['defaultPrompt', 'capabilities']) {
      assert(Array.isArray(ui[field]) && ui[field].length > 0 && ui[field].every(value => isText(value)),
        `plugin.json: interface.${field} requires non-empty strings`)
    }
    for (const field of ['composerIcon', 'logo']) {
      assert(ui[field]?.startsWith('./') && zippedFiles.includes(ui[field].slice(2)),
        `plugin.json: interface.${field} must point to a packaged asset`)
      assert.equal(extract(ui[field].slice(2)).subarray(0, 8).toString('hex'), '89504e470d0a1a0a',
        `plugin.json: interface.${field} must point to a PNG`)
    }

    const displayNames = new Set()
    for (const skill of skills) {
      const file = `skills/${skill}/SKILL.md`
      const content = readPackaged(file)
      const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]+)$/)
      assert(frontmatter && frontmatter[2].trim(), `${file}: expected frontmatter and instructions`)
      const metadata = parseYaml(frontmatter[1], file)
      assert.equal(metadata?.name, skill, `${file}: name must match the unique skill directory`)
      assert.match(metadata.name, /^(?=.{1,64}$)[a-z0-9]+(?:-[a-z0-9]+)*$/)
      assert(isText(metadata.description, 1024), `${file}: invalid description`)

      const agents = `skills/${skill}/agents/openai.yaml`
      const presentation = parseYaml(readPackaged(agents), agents)?.interface
      for (const field of ['display_name', 'short_description', 'default_prompt']) {
        assert(isText(presentation?.[field]), `${agents}: missing interface.${field}`)
      }
      assert(!displayNames.has(presentation.display_name), `${agents}: duplicate display name`)
      displayNames.add(presentation.display_name)
    }
    for (const file of zippedFiles.filter(name => name.endsWith('.md'))) {
      checkLinks(file, readPackaged(file), readPackaged, name => zippedFiles.includes(name), true)
    }
  } finally {
    rmSync(temporary, { recursive: true, force: true })
  }
}

try {
  for (const folder of ['.github/workflows', '.github/ISSUE_TEMPLATE', '.github']) {
    for (const name of readdirSync(folder).filter(name => /\.ya?ml$/.test(name))) {
      const file = join(folder, name)
      assert(parseYaml(read(file), file), `${file}: empty YAML document`)
    }
  }
  for (const file of ['README.md', 'CHANGELOG.md', ...readdirSync('submission')
    .filter(name => name.endsWith('.md')).map(name => join('submission', name))]) {
    checkLinks(file, read(file), read, existsSync)
  }
  await checkPackage(process.argv[2] ?? 'HEAD')
  console.log('Validated repository YAML and local links, plugin schema, skill metadata, versions, references and release ZIP.')
} catch (error) {
  console.error(`Plugin QA failed: ${error.message}`)
  process.exitCode = 1
}
