# SauceDemo Defect Report

**Application:** https://www.saucedemo.com/  
**Test account:** `standard_user`  
**Scope:** Cart, checkout, customer information, and order confirmation

## BUG-01: Checkout Can Be Completed With an Empty Cart

**Module:** Cart / Checkout  
**Status:** Reproduced  
**Severity:** Medium  
**Priority:** P2

### Steps to Reproduce
1. Log in using `standard_user`.
2. Keep the cart empty.
3. Navigate to checkout.
4. Enter the required checkout information.
5. Click **Continue**.
6. Review the order summary.
7. Click **Finish**.

### Expected Result
The application should prevent checkout completion when the cart is empty.

### Actual Result
The application allowed checkout to continue and displayed an order-completion confirmation with item total, tax, and total shown as `$0.00`.

### Impact
Completing checkout with an empty cart creates invalid order confirmations and inaccurate order records, causing confusion for users.

### Evidence
- [Checkout recording](<recordings/Screen Recording 2026-10-19 193734.mp4>)

### Classification
I tested checkout with an empty cart and found that the application allowed the order to be completed. The application should prevent checkout when the cart is empty to avoid invalid orders and inaccurate order records.

---

## BUG-02: Unusual Checkout Input Formats Are Accepted

**Module:** Checkout — Your Information  
**Status:** Behavior reproduced  
**Severity:** Medium  
**Priority:** P2

### Test Data
- First Name: `4321`
- Last Name: `4567`
- Postal Code: `431401demo`

### Steps to Reproduce
1. Log in using `standard_user`.
2. Add a product to the cart.
3. Open the cart and click **Checkout**.
4. Enter the test data listed above.
5. Click **Continue**.
6. Observe the resulting page.

### Expected Result
The application should validate customer names and postal codes and reject invalid formats with a clear validation message.

### Actual Result
The application proceeded to the checkout overview without displaying a validation error for the supplied values.

### Impact
Accepting invalid customer information can reduce data quality and cause issues during order processing.

### Evidence
- [Checkout screenshot](<evidence/screenshots/Screenshot 2026-10-19 173032.png>)

### Classification
I tested these inputs and found that the application accepts numeric names and an alphanumeric postal code without displaying a validation error. The application should validate these fields and prevent invalid data from proceeding to checkout.

---

## BUG-03: No Visible Order or Invoice Reference on the Completion Screen

**Module:** Checkout / Order Confirmation  
**Status:** Exploratory observation  
**Severity / Priority:** Not assigned

### Steps to Reproduce
1. Log in using `standard_user`.
2. Add a product to the cart.
3. Enter the required checkout information.
4. Review the order overview.
5. Click **Finish**.
6. Inspect the order-completion screen.

### Expected Result
The application should display a unique order reference for every completed order to support order identification and tracking.

### Actual Result
The completion screen displayed a success confirmation without a visible unique order or invoice reference.

### Impact
The missing reference makes order tracking and customer support more difficult.

### Evidence
- [Order receipt PDF](<evidence/screenshots/swag-labs-order-2026-10-19_13-00-43.pdf>)

### Classification
The confirmation screen does not display a unique order or invoice number, making order tracking and customer support difficult. The application should display a unique reference number for every completed order.

---

## Summary

| ID | Finding | Classification |
|---|---|---|
| BUG-01 | Empty-cart checkout | Reproduced behavior |
| BUG-02 | Unusual input formats accepted | Reproduced validation behavior |
| BUG-03 | No visible order/invoice reference | Exploratory observation |

The report documents the observed application behavior, its impact, and the expected behavior for each finding.