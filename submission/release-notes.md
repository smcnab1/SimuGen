# SimuGen v1.1.0 Submission Notes

## Changes

- **Interactive Clinical Simulation** runs fictional patient encounters with history-taking, assessment, staged results, case-based progression and a concise encounter record.
- **Clinical Simulation Debrief** uses the available encounter evidence to guide formative reflection, discuss decisions and plan further practice.
- **Clinical Scenario Reviewer** reviews supplied educational material for clinical consistency, learning design, facilitation, inclusion and evidence. It gives prioritised findings and proposes revisions when requested.
- **Clinical Scenario Generator** retains the existing written scenario workflow. Its activation guidance distinguishes authoring a case or debrief plan from running, debriefing and reviewing.

All four skills are included in the portable package under `plugin/`. They share clinical evidence guidance, educational standards and handover conventions. UK practice and terminology remain the default.

## Clinical governance

Use fictional cases for formative learning with qualified faculty oversight where applicable. Check current clinical guidance and local requirements before using material in education. Keep identifiers and confidential material out of all inputs. A text-based encounter follows a case plan. Secure assessment, physiological modelling and certification of competence are outside the supported use.

The [educational reference](../plugin/skills/generate-clinical-scenario/references/educational-standards.md) covers ASPiH 2023, the four revised INACSL Cornerstones (2025), current HCPC requirements and the revised standards effective September 2027. It also describes the PEARLS approach used to support formative debriefing. Use the linked primary sources to check applicability for the intended programme.

## Validation and limits

| Evidence | What it covers |
| --- | --- |
| GitHub release candidate checks | Locked installation, ESLint, TypeScript, static site export, YAML, published manifest schema and OpenAI metadata, skill identities, package contents, licence, versions and repository paths. |
| ChatGPT acceptance | Pending. The [test suite](test-cases.md) has preflight checks, 41 workflow cases and eight generator regressions. Skill discovery, access to sibling references and behaviour in multi-turn sessions require host evidence. |
| Faculty review | Pending. Record the reviewer, clinical context, evidence and any conditions against the tested revision. |

Instructions guide the model's output. It may drift from the authored case or lose earlier turns in long conversations. Resume from a reliable learner-safe checkpoint and the case where available. Keep the faculty key in a separate faculty-only conversation and check all clinical content before teaching. A role label in a chat cannot control access to material in that chat.

## Owner acceptance and release

1. Check out the candidate commit. Run `npm ci` and `npm run check:plugin`, then package it with `git archive --format=zip --output=/tmp/simugen-1.1.0.zip HEAD:plugin`. Retain the ZIP and record its commit, `git rev-parse HEAD:plugin` tree ID and ZIP SHA-256. Test that package in an eligible private ChatGPT host using [the acceptance checklist](test-cases.md).
2. Have qualified faculty review the evidence and representative generated cases. Verify clinical observations, intervention and escalation rules, medication claims if present, learner scope and supervision, release of information, inclusion, educational alignment and debrief attribution. Record any local policy or teaching conditions. Resolve critical findings and rerun affected cases against the corrected candidate.
3. Obtain owner approval before merging PR #7 into `master`. Confirm the final plugin tree matches the accepted package. Repeat relevant checks if it changed. The existing Pages workflow runs on merges into `master`. Verify the site export and deployment.
4. With separate release approval, date the changelog and prepare the GitHub tag and release from the agreed revision. Use the retained acceptance ZIP and verify its SHA-256 before uploading it.
5. In the existing SimuGen entry, choose **Upload plugin to make changes**. Check the imported version, assets and four skills under **Metadata & Skills**. Resolve required dashboard findings and submit the version for review. Publish the approved version only with owner authorisation, then verify the listing, skill discovery and a smoke encounter. [OpenAI plugin update instructions](https://developers.openai.com/plugins/deploy/submission#update-your-published-plugin)

Keep the [v1.0.0 release notes](https://github.com/smcnab1/SimuGen/blob/1388ce0f5efb41aa4cd91c5280c69d6a4f552962/submission/release-notes.md) as the historical record.
