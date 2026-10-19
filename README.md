# SauceDemo SQA Assessment

## Overview

This repository contains an AI-assisted QA assessment for SauceDemo, covering exploratory testing, defect investigation, Playwright end-to-end automation, and an AI-driven QA strategy.

**Application under test:** https://www.saucedemo.com/

## Tools Used

- ChatGPT — exploratory test ideas, automation assistance, troubleshooting, and QA strategy drafting
- Playwright Test — browser automation and assertions
- TypeScript — test implementation
- Node.js and npm — runtime and package management
- Chromium — browser used for automation
- Visual Studio Code — development environment
- Git and GitHub — version control and repository hosting

## Test Scenarios Covered

1. **Successful Checkout:** Log in, add Sauce Labs Backpack to the cart, enter checkout information, verify order totals, and confirm order completion.
2. **Checkout Input Validation:** Enter numeric names and an alphanumeric postal code, then verify and document the application's response.

## Prerequisites

- Node.js and npm
- Git (for cloning the repository)

## Setup

Clone the repository and open its directory:

```bash
git clone https://github.com/rushiphutane11/saucedemo-qa-assessment.git
cd saucedemo-qa-assessment
npm install
npx playwright install chromium
```

## Run Automated Tests

```bash
npx playwright test
```

## View the HTML Report

```bash
npx playwright show-report
```

Playwright generates an HTML report after test execution.

## AI Assistance and Manual Review

AI assisted with exploratory test design, test structure, locator selection, assertions, debugging, and QA strategy development. I reviewed the suggestions, validated application behavior, corrected a test-file structure issue, and executed the automated tests.

The unusual-input test documents the application's observed response to numeric names and an alphanumeric postal code. The finding is recorded as a validation gap because the assessment does not define specific input validation requirements.

## Limitations

The automated suite covers the scenarios implemented in `tests/checkout.spec.ts` and does not represent complete application regression coverage. Test results reflect the execution performed against the application and test environment.

The defect report distinguishes observed behavior from confirmed defects and documents findings with supporting evidence.

## Assessment Documents

- [Defect Report](DEFECT_REPORT.md)
- [AI Usage Log](AI_USAGE_LOG.md)
- [AI-Driven QA Strategy](QA_STRATEGY.md)
- [Automated Tests](tests/checkout.spec.ts)
- [Playwright Configuration](playwright.config.ts)

## Test Results

The recorded test execution completed with **2 tests passed and 0 failed**. Run `npx playwright test` to verify the current test results.