# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 1.x     | Yes       |
| < 1.0   | No        |

Only supported releases receive security fixes.

## Reporting a Vulnerability

Please do **not** report security vulnerabilities through a public GitHub issue.

Use GitHub's private vulnerability reporting instead:

https://github.com/smcnab1/SimuGen/security/advisories/new

This allows security information to be shared privately with the project maintainer.

When reporting a vulnerability, include where possible:

- A clear description of the issue
- The affected component or file
- Steps required to reproduce the issue
- The potential impact
- Any suggested mitigation or fix
- Relevant logs or screenshots with secrets and personal information removed

Do not include:

- Identifiable patient information
- Protected health information
- API keys or credentials
- Access tokens
- Other confidential or sensitive information that is not required to understand the vulnerability

## Responsible Disclosure

Please allow reasonable time for a reported vulnerability to be investigated and addressed before publishing details.

Do not intentionally:

- Exploit a vulnerability beyond what is necessary to demonstrate it
- Access, modify or delete data belonging to other users
- Disrupt services
- Exfiltrate sensitive information
- Publicly disclose an unresolved vulnerability without first allowing a reasonable opportunity for remediation

## Scope

Security reports may relate to:

- The SimuGen plugin package
- The public website
- Repository configuration
- Build and deployment workflows
- Dependencies used by SimuGen

Concerns about inaccurate, unsafe or outdated **clinical content** should instead be reported using the Clinical content issue form:

https://github.com/smcnab1/SimuGen/issues/new/choose

## Response

Valid security reports will be reviewed and prioritised according to their potential impact.

Where a vulnerability is confirmed, the project will aim to:

1. Assess the affected versions and components.
2. Develop and test an appropriate fix.
3. Release the fix through the normal project release process.
4. Update security guidance or documentation where necessary.
5. Credit the reporter where appropriate and requested.
