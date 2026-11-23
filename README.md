# SimuGen

SimuGen is an open-source ChatGPT plugin for designing, running, debriefing and reviewing fictional clinical simulations. It uses UK clinical terminology and practice by default and adapts to the profession, learner level, setting and requested jurisdiction.

[Open in ChatGPT](https://chatgpt.com/plugins/plugins_6ab3b44c4dac8191974976c0d09f0180) · [Project website](https://smcnab1.github.io/SimuGen/) · [Changelog](CHANGELOG.md)

## Workflows

| Workflow | What it does | Example prompt |
| --- | --- | --- |
| [Generate](plugin/skills/generate-clinical-scenario/SKILL.md) | Produces plans ranging from learner briefs to faculty packages with objectives, staged findings, progression, resources and debrief prompts. | Create a ward deterioration scenario for second-year nursing students, with escalation objectives. |
| [Run](plugin/skills/run-clinical-simulation/SKILL.md) | Runs a fictional patient encounter in ordinary language. Findings become available through appropriate actions and the case progresses in response. | Run a fictional ward scenario for a second-year student. Let me lead the assessment. |
| [Debrief](plugin/skills/debrief-clinical-simulation/SKILL.md) | Guides reflection on a completed simulation using the encounter record, a transcript, educator observations or the learner's account. | Debrief my encounter with one question at a time, focusing on when I escalated. |
| [Review](plugin/skills/review-clinical-scenario/SKILL.md) | Reviews supplied teaching material for clinical consistency, objective alignment, learner scope and delivery. | Review this faculty guide and prioritise changes before teaching. |

Run a case and debrief it in the same chat, or copy the encounter record into a new chat. Educators can review a written scenario before running it. For blind practice, start with a learner-only brief and keep the answer key out of the learner's chat.

## Clinical and educational use

Use fictional training data. Keep real patient information and identifiers out of chats, attachments and public reports. Use the appropriate clinical pathway for a real patient.

Review AI-generated material with qualified faculty before teaching. Verify consequential clinical recommendations against current authoritative sources, such as NICE, NHS, Resuscitation Council UK and the BNF, and check relevant local policies. [Clinical evidence guidance](plugin/skills/generate-clinical-scenario/references/clinical-evidence.md)

Conversational simulations use case-based progression. They support formative practice and feedback. Faculty remain responsible for formal assessment. Keep high-stakes exams in environments with appropriate assessment and access controls. [Educational standards](plugin/skills/generate-clinical-scenario/references/educational-standards.md)

## Development and packaging

The portable plugin lives in [plugin/](plugin), with a root manifest, assets and four skill directories. Each skill has a `SKILL.md` and `agents/openai.yaml`. They use shared [scenario and handover conventions](plugin/skills/generate-clinical-scenario/references/scenario-structure.md). ChatGPT supplies the conversation context and host capabilities. SimuGen has no separate service, accounts, database or MCP server.

The website uses Node.js 24 LTS and npm.

```bash
npm ci
npm run lint
npm run typecheck
npm run check:plugin
npm run build
```

Use `npm run dev` for local development. The production build exports the site to `out/` for GitHub Pages. The plugin check needs Git and Info-ZIP `unzip`, builds the ZIP from committed `HEAD:plugin` and verifies it against the published schema and repository files.

Package the contents of `plugin/` for submission. See the [host acceptance tests](submission/test-cases.md) and [submission release notes](submission/release-notes.md).

## Support and contributions

- [Contributing](.github/CONTRIBUTING.md)
- [Report an issue or clinical content concern](https://github.com/smcnab1/SimuGen/issues/new/choose)
- [Report a vulnerability privately](https://github.com/smcnab1/SimuGen/security/advisories/new)
- [Privacy policy](PRIVACY.md) · [Terms of service](TERMS.md) · [MIT Licence](LICENSE.md)
