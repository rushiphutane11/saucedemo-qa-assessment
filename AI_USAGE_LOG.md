# AI Usage Log

## Tools Used
- ChatGPT — exploratory test ideas, automation assistance, code troubleshooting, and QA strategy drafting.
- Playwright Test — browser automation and assertions.
- TypeScript and Node.js — automation implementation and execution.
- VS Code — development environment.
- Chromium — browser used for testing.

## Prompt 1: Risk-Based Exploratory Testing
**Purpose:** Identify important user journeys and potential risks.

**AI Contribution:** Suggested testing login, product inventory, cart behavior, checkout validation, and order confirmation.

**Validation:** Manually explored the SauceDemo application and recorded observed behavior.

## Prompt 2: Empty Cart Checkout
**Purpose:** Investigate whether an order can be completed without products.

**AI Contribution:** Suggested testing the empty-cart checkout journey.

**Validation:** Reproduced order completion with an empty cart. The generated receipt displayed $0.00 for item total, tax, and total.

**Decision:** Retained as a defect candidate, subject to confirmation of intended behavior.

## Prompt 3: Checkout Input Validation
**Purpose:** Investigate handling of unusual customer information.

**AI Contribution:** Suggested using numeric names and an alphanumeric postal code.

**Validation:** The application proceeded to the checkout overview without showing a validation error.

**Decision:** Recorded as a potential validation gap. Confirmed requirements are needed before classifying it as a defect.

## Prompt 4: Playwright Automation
**Purpose:** Automate the purchase journey.

**AI Contribution:** Assisted with test structure, locators, assertions, and debugging.

**Manual Corrections:** Corrected test-file structure after a test registration error. Ran the tests again.

**Observed Result:** Two tests passed in the recorded run.

## Prompt 5: QA Strategy
**Purpose:** Develop a practical AI-assisted QA workflow.

**AI Contribution:** Helped draft recommendations covering human review, regression testing, CI/CD quality gates, and AI risks.

**Validation:** Reviewed the proposal for practical relevance to the assessment.

## Limitations
AI-generated suggestions and code were not treated as proof of correctness. Application behavior was manually checked, and potential defects were separated from confirmed findings.
