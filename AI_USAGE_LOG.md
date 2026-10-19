# AI Usage Log

## Tools Used

- ChatGPT — exploratory test ideas, automation assistance, troubleshooting, and QA strategy drafting
- Playwright Test — browser automation and assertions
- TypeScript and Node.js — automation implementation and execution
- Chromium — browser used for testing
- Visual Studio Code — development environment
- Git and GitHub — version control and repository hosting

## Prompt 1: Risk-Based Exploratory Testing

**Representative Prompt:**

"Identify high-risk user journeys across login, product inventory, cart, checkout validation, and order confirmation. Suggest exploratory test scenarios, expected observations, and evidence to collect. Do not assume a behavior is a defect without a requirement."

**Purpose:** Identify important user journeys and potential risks.

**AI Contribution:** Suggested exploring login, inventory, cart behavior, checkout validation, and order confirmation.

**What I Validated:** Manually explored the application and recorded observed behavior.

**Decision:** Used relevant suggestions to guide exploration. Kept unsupported assumptions separate from confirmed defects.

## Prompt 2: Empty Cart Checkout

**Representative Prompt:**

"Suggest a test to investigate whether SauceDemo permits checkout with an empty cart. Provide reproduction steps and explain what evidence should be collected. Treat the result as a defect candidate until expected behavior is confirmed."

**Purpose:** Investigate checkout behavior when no products are in the cart.

**AI Contribution:** Suggested testing the empty-cart journey and collecting evidence from the overview and completion screens.

**What I Validated:** Reproduced the checkout flow with an empty cart and observed the displayed totals and completion confirmation.

**Decision:** Retained this as a defect candidate because the assessment does not specify the expected empty-cart behavior.

## Prompt 3: Checkout Input Validation

**Representative Prompt:**

"Suggest exploratory test data for SauceDemo checkout fields, including numeric names and an alphanumeric postal code. Explain how to document observed behavior without assuming undocumented validation rules."

**Purpose:** Investigate handling of unusual customer information.

**AI Contribution:** Suggested numeric names and an alphanumeric postal code as exploratory test data.

**What I Validated:** Entered the values and observed that the application proceeded to the checkout overview without displaying a validation error.

**Decision:** Recorded the behavior as a potential validation gap. Did not classify it as a confirmed defect because the assessment does not define the required input formats.

## Prompt 4: Playwright Automation

**Representative Prompt:**

"Review a Playwright TypeScript test for SauceDemo. Check the login, add-to-cart, checkout, order totals, and completion flow. Recommend reliable locators and meaningful assertions, and explain any limitations."

**Purpose:** Automate and review an important end-to-end purchase journey.

**AI Contribution:** Assisted with test structure, locator selection, assertions, and troubleshooting.

**What I Validated:** Reviewed the test flow and executed the automated tests.

**Manual Correction:** Corrected a test-file structure issue encountered during development and ran the tests again.

**Decision:** Retained assertions for navigation, cart contents, checkout totals, and successful order completion. The unusual-input test records behavior without asserting that the behavior is necessarily incorrect.

**Recorded Result:** Two tests passed in the recorded execution. This result should be reconfirmed by running the current version of the tests.

## Prompt 5: AI-Driven QA Strategy

**Representative Prompt:**

"Draft a concise AI-assisted QA strategy covering the QA lifecycle, human review of AI-generated tests, defect analysis, regression selection, CI/CD quality gates, risks, mitigations, and success metrics."

**Purpose:** Develop a practical AI-assisted QA workflow.

**AI Contribution:** Helped draft recommendations covering human review, regression testing, CI/CD quality gates, and AI-related risks.

**What I Validated:** Reviewed the recommendations for relevance to the assessment and the need for human verification.

**Decision:** Kept the full strategy in `QA_STRATEGY.md`. This log documents the AI assistance used to prepare the strategy; it does not replace the separate strategy document.

## Limitations and Human Accountability

AI-generated ideas and code were treated as suggestions rather than proof of correctness. Application behavior was manually checked, and potential defects were separated from confirmed findings.

The current automation covers only the implemented scenarios and does not establish complete regression coverage. Test results must be verified by executing the current code.

The prompts above are representative examples. They should not be interpreted as verbatim historical records unless they match the prompts actually used during the assessment.