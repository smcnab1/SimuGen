# Contributing

Contributions to SimuGen are welcome, including code changes, documentation improvements, bug reports, feature suggestions and clinical-content feedback.

Participation in this project is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).

## Code and documentation changes

To contribute code or documentation:

1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Commit your changes with a clear commit message.
5. Push the branch to your fork.
6. Open a pull request.

Please follow the guidance in the [pull request template](PULL_REQUEST_TEMPLATE.md) when submitting changes.

Where your change affects the plugin, check that:

- `plugin/plugin.json` remains valid.
- Relevant skills continue to behave as intended.
- Clinical simulation content remains educational rather than patient-specific.
- No identifiable patient information or other sensitive personal data is introduced.
- Documentation is updated where behaviour or structure has changed.

## Bug reports

Use the [GitHub issue tracker](https://github.com/smcnab1/SimuGen/issues) to report bugs.

Please include enough information to reproduce the issue where possible.

Do not include:

- Identifiable patient information
- Protected health information
- Confidential organisational information
- Credentials, secrets or API keys
- Other sensitive personal data

## Feature requests

Feature suggestions are also welcome through the [GitHub issue tracker](https://github.com/smcnab1/SimuGen/issues).

Where possible, describe:

- The problem or educational need
- The intended user or learner group
- The expected behaviour
- Why the change would improve SimuGen

## Clinical-content feedback

If you identify a potential clinical inaccuracy, outdated recommendation or unrealistic scenario behaviour, please open an issue and provide an authoritative source where possible.

Suitable sources include current guidance from organisations such as NICE, NHS, Resuscitation Council UK, relevant Royal Colleges and other recognised professional bodies.

## Pull requests

Keep pull requests focused on a single change where practical.

Before submitting:

- Run the website build if the change affects the web app.
- Review any affected plugin skills.
- Update documentation where necessary.
- Avoid unrelated formatting or dependency changes.
- Confirm that no sensitive or identifiable information is included.

## Licence

By contributing to SimuGen, you agree that your contributions will be licensed under the project's [MIT Licence](../LICENSE.md).
