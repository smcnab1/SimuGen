# SimuGen v1.0.0 Release Notes

## Initial public release

SimuGen v1.0.0 is the first public plugin release of SimuGen for ChatGPT.

SimuGen is designed to help healthcare educators create structured, realistic and educationally purposeful clinical simulation scenarios.

## Included in v1.0.0

- Clinical simulation scenario generation for healthcare education.
- UK healthcare terminology and context by default.
- Adaptation to profession, learner level, specialty and healthcare setting.
- Structured learning objectives.
- Fictional patient profiles and clinical histories.
- Clinically plausible observations and examination findings.
- Relevant investigations and information-release points.
- Scenario progression linked to learner actions.
- Expected learner actions appropriate to learner scope.
- Faculty guidance and simulated-patient information.
- Equipment, environment and moulage requirements.
- Debriefing prompts linked to learning objectives.
- Support for concise scenario outlines and complete faculty-ready packages.
- Synthetic patient-data safeguards.
- Clear separation between simulation design and real-patient clinical care.
- Evidence-handling guidance that prevents fabricated citations or unsupported claims of guideline alignment.
- Skill-specific metadata for ChatGPT.
- Public website, privacy policy, terms of service and GitHub-based support.

## Architecture

SimuGen v1.0.0 is a skills-only OpenAI plugin.

It does not require:

- an external backend
- a database
- authentication
- user accounts
- an MCP server
- external plugin APIs

The initial release contains one primary skill:

`generate-clinical-scenario`

Additional simulation workflows may be introduced as separate skills in future releases.

## Safety and privacy

SimuGen is intended for healthcare education and simulation design.

It should not be used to direct the diagnosis or treatment of a real patient.

Users should not provide identifiable patient information, protected health information or genuine healthcare identifiers.

Generated patient information is intended to be fictional and synthetic.

AI-generated clinical content can be incomplete or inaccurate and should be reviewed by an appropriately qualified educator before use in teaching or assessment.

## Support

Issues, feature requests and clinical-content concerns can be submitted through:

https://github.com/smcnab1/SimuGen/issues

Security vulnerabilities should be reported privately through GitHub Security Advisories.

## Version

Version: 1.0.0

Release date: 23 September 2026
