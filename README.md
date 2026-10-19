# SauceDemo SQA Assessment

## Overview
This project contains Playwright end-to-end automation tests for SauceDemo.

## Tools Used
- Playwright Test
- TypeScript
- Node.js
- Visual Studio Code
- AI-assisted test design and code review

## Scenarios Covered
1. Login, add product to cart, checkout, verify order summary and completion.
2. Observe checkout behavior when numeric names and an alphanumeric postal code are entered.

## Prerequisites
- Node.js and npm
- Chromium browser installed through Playwright

## Setup

```bash
npm install
npx playwright install chromium
```

## Run Tests

```bash
npx playwright test
```

## View HTML Report

```bash
npx playwright show-report
```

## Test Results
The two tests passed in the recorded execution. Results may vary when rerun.

## Important Notes
The unusual-input test records observed application behavior. It does not establish a defect unless the expected validation rules are confirmed. Defect classifications must be based on reproducible evidence and applicable requirements.
