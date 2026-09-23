---
name: generate-clinical-scenario
description: Create structured, realistic clinical simulation scenarios for healthcare education, primarily in UK healthcare settings.
---

# Clinical Scenario Generation

Create realistic, educationally purposeful clinical simulation scenarios for healthcare education and training.

Scenarios should primarily reflect UK healthcare practice, terminology and settings unless the user requests another jurisdiction.

## Core Principles

- Use UK English spelling and terminology.
- Base clinical content on recognised UK guidance where relevant, including NICE, NHS, Resuscitation Council UK, BNF and JRCALC.
- Apply recognised healthcare simulation principles, including ASPiH and INACSL standards where appropriate.
- Clearly distinguish educational simulation content from advice about the care of a real patient.
- Do not invent citations, guideline recommendations or clinical facts.
- Where current guidance cannot be verified, state this rather than presenting uncertain information as authoritative.
- Keep scenarios realistic but proportionate to the learner level and learning objectives.
- Avoid unnecessary complexity that does not contribute to the educational purpose.

## Information Gathering

Use information already supplied by the user.

Ask a clarifying question only when missing information would materially affect the scenario. Otherwise, make reasonable educational assumptions and state them briefly where necessary.

Useful information includes:

- Profession or learner group
- Learner level or experience
- Number of patients
- Presenting condition or clinical problem
- Specialty or educational focus
- Clinical setting
- Intended learning outcomes
- Desired scenario duration or complexity
- Available equipment, faculty or simulation resources

For broad prompts such as "Paramedic", "Nursing" or "Mental Health", establish enough information to determine:

1. The learner group and level
2. The clinical focus or presentation
3. The setting and context

Do not require the user to answer a fixed questionnaire if sufficient information has already been provided.

# Scenario Design

Structure the scenario around clear educational objectives and a plausible clinical journey.

Unless the user requests a different format, include the following sections.

## Scenario Overview

Provide:

- Scenario title
- Clinical setting
- Target learner group
- Suggested number of learners
- Approximate duration
- Level of difficulty
- Brief scenario summary
- 3-6 specific learning objectives

Learning objectives should be observable and appropriate to the learner level.

## Patient Profile

For each simulated patient, provide:

- Fictional name
- Age
- Sex relevant to clinical care where appropriate
- Gender identity where educationally relevant
- Relevant ethnic, cultural or faith background
- Relevant disability, communication or accessibility needs
- Occupation or social circumstances where relevant

Only include demographic characteristics that contribute meaningfully to realism, communication, clinical reasoning or educational objectives.

Avoid stereotypes and tokenistic inclusion.

### Synthetic Data

All patient information must be fictional and created solely for simulation.

Never request, reproduce or rely on identifiable information about a real patient.

Do not generate identifiers that could reasonably be mistaken for genuine personal information, including:

- Valid NHS numbers
- Genuine home addresses
- Genuine telephone numbers
- Real patient record numbers
- Other government or healthcare identifiers

Where an identifier is useful, use an obviously synthetic format such as:

- `SIM-PATIENT-001`
- `TRAINING-NHS-001`
- `SIM-ADDRESS`
- `SIM-CONTACT`

Clearly indicate that all such information is fictional and for training use only.

## Clinical Background

Include relevant:

- Presenting complaint
- History of presenting complaint
- Previous medical history
- Surgical history where relevant
- Current medications
- Allergies
- Family history where relevant
- Social history
- Smoking, alcohol or substance-use history where relevant
- Mobility and activities of daily living where relevant
- Baseline cognitive or functional status
- Relevant psychosocial circumstances

Do not add unnecessary sensitive personal detail solely for realism.

## Initial Presentation

Describe how the patient appears when learners first encounter them.

Include relevant:

- Position and environment
- General appearance
- Behaviour
- Level of distress
- Communication
- Symptoms
- Relevant physical signs

Where useful, provide opening dialogue for the patient or simulated participant.

## Initial Observations

Provide clinically plausible observations relevant to the scenario.

These may include:

- Respiratory rate
- SpO₂
- Oxygen therapy
- Heart rate
- Blood pressure
- Temperature
- Blood glucose
- Glasgow Coma Scale
- AVPU
- Pain score
- ECG findings
- Capillary refill time
- NEWS2 or other appropriate scoring systems
- Relevant examination findings

Do not include observations simply to fill a template.

Ensure values are internally consistent with the intended clinical presentation.

## Investigations

Where relevant, provide results such as:

- 12-lead ECG
- Blood tests
- Blood gas analysis
- Urinalysis
- Imaging
- Point-of-care testing
- Pregnancy testing
- Microbiology
- Other specialty-specific investigations

Indicate whether results are:

- Available immediately
- Released when requested
- Triggered by a learner action
- Revealed later during the scenario

## Scenario Progression

Describe how the scenario develops over time.

Use clear phases or states where useful.

For each phase include:

- Trigger
- Patient presentation
- Observations
- Information available to learners
- Expected learner actions
- Response to appropriate management
- Response to delayed or inappropriate management

The patient's response should be clinically plausible.

Avoid forcing deterioration solely to create drama. Improvement, stability or deterioration should follow logically from the underlying condition and learner actions.

## Expected Learner Actions

Describe the key actions learners would reasonably be expected to undertake.

These may include:

- Initial assessment
- Recognition of clinical priorities
- Escalation
- Communication
- Investigations
- Treatment
- Medication administration
- Reassessment
- Team leadership
- Human factors
- Safeguarding
- Capacity or consent considerations
- Referral or disposition

Adapt expectations to the learner's professional scope and level of training.

Do not imply that learners should perform procedures or administer medicines outside their appropriate scope of practice.

## Medications

Where medications are relevant, include:

- Generic medication name
- Indication
- Route
- Dose where educationally appropriate
- Relevant cautions or contraindications
- Expected response

Link to the BNF or other authoritative UK source when useful.

Medication information must be framed for simulation and education rather than as prescribing advice for an individual real patient.

## Faculty Guidance

Include practical information for facilitators where useful:

- Faculty roles
- Simulated participant instructions
- Prompts that may be given
- Information learners receive only if requested
- Expected sequence of events
- Key decision points
- When to progress the scenario
- When to pause or terminate the scenario
- Potential learner actions and corresponding responses

Avoid scripting learners towards a single exact sequence unless the learning objective requires it.

## Simulation Requirements

Provide relevant:

### Equipment

Examples may include:

- Patient monitor
- Defibrillator
- Airway equipment
- Oxygen
- IV or IO equipment
- Medication props
- Documentation
- PPE
- Specialty-specific equipment

### Moulage

Describe any required:

- Wounds
- Skin changes
- Bleeding
- Swelling
- Burns
- Rashes
- Medical devices
- Other physical findings

### Environment

Identify relevant environmental requirements such as:

- Hospital ward
- Emergency department
- Ambulance
- Patient home
- GP surgery
- Mental health setting
- Community location
- Theatre
- Maternity environment
- Major-incident scene

## Debrief

Provide 3-6 open facilitation questions linked to the learning objectives.

Questions should encourage reflection rather than simply test factual recall.

Examples include:

- What were your initial priorities and why?
- Which findings most influenced your clinical reasoning?
- How did the team recognise and respond to changes in the patient's condition?
- What communication strategies worked well?
- Were there points where an alternative approach could have been taken?
- How might this situation differ in real clinical practice?
- What will you take from this scenario into future practice?

Where appropriate, include clinical, teamwork and human-factor themes separately.

# Diversity and Inclusion

Across generated scenarios, vary patient characteristics naturally and realistically.

Consider:

- Age
- Sex
- Gender identity
- Ethnicity
- Language
- Religion or faith
- Disability
- Neurodivergence
- Learning disability
- Mental health
- Socio-economic circumstances
- Housing
- Family and caring responsibilities
- Sexual orientation where clinically or educationally relevant

Characteristics should never automatically imply particular illnesses, behaviours or social circumstances.

Include reasonable adjustments, communication needs and accessibility considerations where relevant.

# Educational Evidence

Where useful, provide a short section of resources for learners and faculty.

Prioritise authoritative sources such as:

- NICE
- NHS
- Resuscitation Council UK
- British National Formulary
- JRCALC
- Royal Colleges
- UK professional regulators
- Relevant national clinical guidance
- ASPiH
- INACSL

Do not fabricate URLs, publication titles or recommendations.

When current evidence materially affects the scenario, prefer verified current guidance.

# Images and Visual Material

If the user requests visual material for simulation:

- Create or describe medically plausible wounds, moulage, injuries, equipment or environments.
- Keep the appearance consistent with the clinical scenario.
- Use realistic UK healthcare environments where relevant.
- Avoid unnecessary graphic detail.
- Make clear where an image represents simulated pathology or moulage rather than a real patient.

Visual content should support the educational objective rather than exist purely for visual impact.

# Output Style

Use clear headings and concise clinical language.

Prefer structured sections, bullet points and tables where they improve usability.

Do not overwhelm the user with unnecessary detail.

Adapt the output to the request:

- Brief scenario outline - concise
- Full simulation package - comprehensive
- Faculty guide - operational detail
- Learner handout - only information learners should receive
- Debrief guide - reflection and educational discussion
- Scenario progression - clear state-based sequence

When the user asks for a complete scenario, provide enough information for an educator to run it without requiring substantial additional design work.
