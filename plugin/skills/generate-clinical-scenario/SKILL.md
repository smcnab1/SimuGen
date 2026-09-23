---
name: generate-clinical-scenario
description: Create structured, realistic clinical simulation scenarios for healthcare education, primarily in UK healthcare settings.
---

# Clinical Scenario Generation

Create realistic, educationally purposeful clinical simulation scenarios for healthcare education and training.

Use this skill when the user asks to create, design, build, develop or adapt a clinical simulation scenario, faculty scenario package, learner scenario, scenario progression or associated debrief.

UK healthcare practice, terminology and settings are the default unless the user requests another jurisdiction.

## User Intent

Follow the user's requested:

- profession or learner group
- learner level
- clinical presentation
- specialty
- healthcare setting
- learning outcomes
- duration
- complexity
- format

User-specified requirements take precedence over the defaults in this skill unless they would create unsafe, misleading or inappropriate content.

Do not force a standard template when the user asks for a narrower output such as a scenario outline, faculty guide, learner brief or debrief plan.

## Information Gathering

Use information already provided by the user.

Ask a clarifying question only when missing information would materially affect the educational design or clinical scenario.

Otherwise, make reasonable educational assumptions and state them briefly where useful.

For very broad requests, establish enough information to determine:

1. Learner group and approximate level
2. Clinical presentation, specialty or learning focus
3. Scenario setting or context

Do not require the user to complete a fixed questionnaire.

## Workflow

When generating a scenario:

1. Determine the learner group, level, learning purpose and setting.
2. Identify the intended clinical problem and appropriate level of complexity.
3. Define clear, observable learning objectives.
4. Build a clinically plausible patient presentation and background.
5. Create internally consistent observations, examination findings and investigations.
6. Design scenario progression around learner actions and the underlying clinical condition.
7. Define expected learner actions appropriate to their professional scope.
8. Provide faculty guidance, simulation requirements and debrief material when relevant.
9. Check the completed scenario for clinical consistency, educational relevance and unnecessary complexity.
10. Ensure the final output matches the format and depth requested by the user.

For a full scenario package, follow `references/scenario-structure.md`.

Load only the sections of that reference needed for the requested output.

## Clinical Accuracy and Evidence

Clinical content should be appropriate to the intended learner level and setting.

For UK scenarios, prioritise recognised authoritative UK sources and terminology.

When current clinical guidance, medication information or evidence materially affects the scenario, follow `references/clinical-evidence.md`.

Do not invent:

- citations
- guideline recommendations
- medication information
- publication titles
- clinical facts

If current information cannot be verified, state the limitation rather than presenting uncertain information as authoritative.

Do not claim exact alignment with guidance that is unavailable for verification.

## Real-Patient Boundary

SimuGen is for healthcare education and simulation design.

Clearly distinguish simulation content from advice about the diagnosis, treatment or management of a real patient.

If a request concerns the care of an identifiable or real patient rather than simulation design, do not treat that patient as the scenario subject.

Where appropriate, offer to convert the clinical concept into a fictional educational scenario instead.

## Synthetic Patient Data

All simulated patient information must be fictional.

Never request, reproduce or rely on identifiable information about a real patient.

Do not generate identifiers that could reasonably be mistaken for genuine personal information, including:

- valid NHS numbers
- genuine home addresses
- genuine telephone numbers
- real patient record numbers
- government identifiers
- other genuine healthcare identifiers

Where an identifier is useful for simulation, use an obviously synthetic format such as:

- `SIM-PATIENT-001`
- `TRAINING-NHS-001`
- `SIM-ADDRESS`
- `SIM-CONTACT`

Make clear where necessary that these are fictional training identifiers.

Do not add unnecessary sensitive personal information solely to make a scenario appear more realistic.

## Scope of Practice

Expected learner actions must be appropriate to the learner's:

- profession
- educational level
- clinical context
- expected scope of practice

Do not imply that learners should independently perform procedures, prescribe medicines or undertake clinical actions outside an appropriate professional scope.

## Scenario Behaviour

The patient's clinical course should follow logically from:

- the underlying condition
- the initial severity
- learner assessment and treatment
- delays or omissions where relevant

Do not force deterioration simply to make a scenario dramatic.

Improvement, stability or deterioration should remain clinically plausible.

Avoid scripting learners towards one exact sequence unless that sequence is necessary to achieve the learning objectives.

## Diversity and Inclusion

Use patient characteristics naturally and where relevant to the scenario.

Avoid stereotypes, tokenistic inclusion or automatically associating demographic characteristics with particular illnesses, behaviours or social circumstances.

Include communication needs, accessibility requirements or reasonable adjustments where they contribute to the educational scenario.

## Visual Material

If the user requests moulage, wound, injury, equipment or environment imagery and image generation is available, generate the requested simulation visual where appropriate rather than only describing it.

Visual content should:

- support the learning objective
- be medically plausible
- match the scenario
- use an appropriate healthcare environment
- clearly represent simulated pathology or moulage rather than a real patient

Do not introduce unnecessary graphic detail.

## Output

Use clear headings and concise clinical language.

Prefer structured sections, tables and bullet points where they improve usability.

Match the level of detail to the request.

When the user requests a complete scenario, provide enough information for an educator to run it without substantial additional scenario design.

Before completing a full scenario, check that:

- learning objectives are clear and observable
- the patient presentation is internally consistent
- observations and investigations fit the intended condition
- progression follows logically from learner actions
- expected actions match learner scope
- faculty have enough information to facilitate the scenario
- debrief prompts connect to the learning objectives
- patient data are clearly fictional
- current clinical claims have not been fabricated
