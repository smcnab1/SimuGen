# Changelog

All notable changes to SimuGen will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Interactive fictional patient encounters with staged findings, case-based progression and learner controls.
- Guided formative debriefing grounded in a simulation record, transcript or learner account.
- Educator review of scenario quality, including actionable findings and standards mapping.
- Shared case and encounter handovers, educational standards guidance and host acceptance tests.

### Changed

- Updated plugin descriptions and prompts to help users choose between design, practice, debrief and review.

## [1.0.0] - 2026-09-23

Initial public plugin release.

### Added

- OpenAI plugin package for SimuGen.
- `plugin.json` manifest and public plugin metadata.
- `generate-clinical-scenario` skill for structured healthcare simulation scenario generation.
- UK-focused clinical simulation guidance.
- Support for learner-level, profession and setting adaptation.
- Structured patient presentation, observations, investigations and scenario progression.
- Faculty guidance, equipment requirements and moulage planning.
- Learning objectives and debriefing prompts.
- Synthetic patient-data safeguards.
- Clinical safety boundaries separating simulation content from real-patient clinical advice.
- Public SimuGen website hosted through GitHub Pages.
- Privacy Policy and Terms of Service.
- GitHub Pages deployment workflow.
- Public support through GitHub Issues.

### Changed

- Reworked the original SimuGen GPT instructions into a structured OpenAI skill.
- Updated project branding and metadata for public plugin distribution.
- Updated the website for static GitHub Pages deployment.
- Replaced the previous contact form with GitHub-based support.

### Removed

- Dependency on the previous GPT Store implementation as the primary SimuGen distribution model.
- Legacy project-template changelog content.

[Unreleased]: https://github.com/smcnab1/SimuGen/compare/1388ce0f5efb41aa4cd91c5280c69d6a4f552962...HEAD
[1.0.0]: https://github.com/smcnab1/SimuGen/blob/1388ce0f5efb41aa4cd91c5280c69d6a4f552962/submission/release-notes.md
