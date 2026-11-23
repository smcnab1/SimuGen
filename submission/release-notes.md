# SimuGen v1.1.0 Submission Notes

GitHub release date **23 November 2026**.

## Changes

- **Interactive Clinical Simulation** adds text-only fictional patient encounters with staged findings, case-based progression and a concise encounter record.
- **Conversational Clinical Debrief** adds guided formative reflection on recorded decisions and actions, with one substantive question per turn.
- **Clinical Scenario Reviewer** reviews supplied educational material for clinical consistency, learning design, facilitation, inclusion and evidence. It gives prioritised findings and proposes revisions when requested.
- **Clinical Scenario Generator** retains the existing written scenario workflow. Its activation guidance distinguishes authoring a case or debrief plan from running, debriefing and reviewing.

All four skills are included in the portable package under `plugin/`. They share clinical evidence guidance, educational standards and handover conventions. UK practice and terminology remain the default.

## Clinical governance

Before reporting a NEWS2 total, verify each component against the applicable scoring chart and check the arithmetic. If verification is unavailable, leave the score unverified.

Use fictional cases for formative learning with qualified faculty oversight where applicable. Check current clinical guidance and local requirements before using material in education. Keep identifiers and confidential material out of all inputs. A text-based encounter follows a case plan. Secure assessment, physiological modelling and certification of competence are outside the supported use.

The [educational reference](../plugin/skills/generate-clinical-scenario/references/educational-standards.md) covers ASPiH 2023, the four revised INACSL Cornerstones (2025), current HCPC requirements and the revised standards effective September 2027. It also describes the PEARLS approach used to support formative debriefing. Use the linked primary sources to check applicability for the intended programme.

## Validation and limits

| Evidence | What it covers |
| --- | --- |
| GitHub release candidate checks | Locked installation, ESLint, TypeScript, static site export, YAML, published manifest schema and OpenAI metadata, skill identities, package contents, licence, versions and repository paths. |
| Owner-reported smoke tests | G09B passed after the NEWS2 fix. R13 passed with text-only patient interaction. The reviewer flagged contradictory observations and prescribing outside the student's scope, consistent with V02 and V04. |
| Observed ward simulation and debrief | One ChatGPT transcript showed natural patient replies, staged initial and repeat observations, separation of ECG intent from action, nurse arrival at reassessment, and an accurate encounter record. Both debrief turns asked one question and the follow-up used the learner's stated concern and recorded actions. This covers the observed portions of R05, D01 and T05. The transcript does not establish the installed ZIP or skill activation. |
| Outstanding host checks | Skill discovery, packaged reference reads, G09A, repeat runs, fresh-chat debrief handover and the other unexecuted [checklist cases](test-cases.md) remain open. |
| Owner-led faculty acceptance | **Accepted with conditions.** Sam McNab, HCPC-registered paramedic and Senior Lecturer in Simulation & Immersive Technologies, reviewed representative materials and observed workflows on 23 November 2026. He authorised the formative education release with the outstanding host checks recorded above. [Faculty acceptance and release authorisation](https://github.com/smcnab1/SimuGen/pull/7#issuecomment-7103486604) |

Instructions guide the model's output. It may drift from the authored case or lose earlier turns in long conversations. Resume from a reliable learner-safe checkpoint and the case where available. Keep the faculty key in a separate faculty-only conversation and check all clinical content before teaching. A role label in a chat cannot control access to material in that chat.

## Owner acceptance and release

The owner approval covers the plugin tree `786d1c6ea6a9d2354f386605c6e43a76733fc633`. Educators must verify clinical guidance, treatment recommendations and assessment expectations before formal teaching. Use feedback for formative learning and keep faculty answer keys separate. Address any critical clinical or educational defect before continued distribution.

The [GitHub release](https://github.com/smcnab1/SimuGen/releases/tag/v1.1.0) records the ZIP checksum. In the existing SimuGen entry, choose **Upload plugin to make changes**. Check the imported version, assets and four skills under **Metadata & Skills**. Resolve required dashboard findings and submit the version for review. After OpenAI approves it, publish the approved version and verify the listing, skill discovery and a smoke encounter. [OpenAI plugin update instructions](https://developers.openai.com/plugins/deploy/submission#update-your-published-plugin)

Keep the [v1.0.0 release notes](https://github.com/smcnab1/SimuGen/blob/1388ce0f5efb41aa4cd91c5280c69d6a4f552962/submission/release-notes.md) as the historical record.
