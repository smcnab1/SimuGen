# SimuGen v1.1.0 Submission Notes

## Changes

- **Interactive Clinical Simulation** runs fictional patient encounters with history-taking, assessment, staged results, case-based progression and a concise encounter record.
- **Clinical Simulation Debrief** uses the available encounter evidence to guide formative reflection, discuss decisions and plan further practice.
- **Clinical Scenario Reviewer** reviews supplied educational material for clinical consistency, learning design, facilitation, inclusion and evidence. It gives prioritised findings and proposes revisions when requested.
- **Clinical Scenario Generator** retains the existing written scenario workflow. Its activation guidance distinguishes authoring a case or debrief plan from running, debriefing and reviewing.

All four skills are included in the portable package under `plugin/`. They share clinical evidence guidance, educational standards and handover conventions. UK practice and terminology remain the default.

## Clinical governance

Use fictional cases for formative learning with qualified faculty oversight where applicable. Check current clinical guidance and local requirements before using material in education. Keep identifiers and confidential material out of all inputs. A text-based encounter follows a case plan. Secure assessment, physiological modelling and certification of competence are outside the supported use.

The educational reference covers ASPiH 2023, relevant INACSL standards including the 2025 revisions, and the HCPC transition to the revised Standards of Education and Training in September 2027. The debrief draws on PEARLS. These references inform the workflows and do not confer approval or accreditation.

## Owner acceptance and release

1. From the candidate commit, package only the plugin with `git archive --format=zip --output=/tmp/simugen-1.1.0.zip HEAD:plugin`. Test that archive in an eligible ChatGPT test host. Confirm the four skills are discoverable, their references open, and the suite in [test-cases.md](test-cases.md) behaves as expected. Record the package revision and results.
2. Have qualified faculty review clinical accuracy, scope, progression, feedback and educational suitability. Resolve any failures and rerun the affected cases.
3. After owner approval, merge the changes and coordinate the GitHub release, website and ChatGPT plugin update. Set the changelog date when the release is approved and verify the published plugin's skills and version.

Keep the [v1.0.0 release notes](https://github.com/smcnab1/SimuGen/blob/1388ce0f5efb41aa4cd91c5280c69d6a4f552962/submission/release-notes.md) as the historical record.
