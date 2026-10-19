# SauceDemo Defect Report

**Application:** https://www.saucedemo.com/  
**Test account:** `standard_user`  
**Scope:** Cart, checkout, customer information, and order confirmation

## BUG-01: Checkout Can Be Completed With an Empty Cart

**Module:** Cart / Checkout  
**Status:** Reproduced behavior; defect candidate  
**Severity:** Medium — provisional  
**Priority:** P2 — provisional

### Steps to Reproduce

1. Log in using `standard_user`.
2. Keep the cart empty.
3. Navigate to checkout.
4. Enter the required checkout information.
5. Click **Continue**.
6. Review the order summary.
7. Click **Finish**.

### Expected Result

If the product requirements prohibit empty orders, the application should prevent checkout completion when the cart contains no products.

### Actual Result

During testing, the application allowed the checkout flow to continue and displayed an order-completion confirmation with item total, tax, and total shown as `$0.00`.

### Potential Impact

If empty orders are not intended, users could complete an order flow without purchasing any products, potentially creating misleading order confirmations or unnecessary order records.

### Evidence

Attach the actual screenshots or recording showing the empty-cart overview and completion page. Add their real repository-relative paths here.

### Evidence


  
- [Checkout recording](<recordings/Screen Recording 2026-10-19 193734.mp4>)

### Classification

I tested checkout with an empty cart and found that the application allowed the order to be completed. The application should prevent checkout when the cart is empty to avoid invalid orders and inaccurate order records.

---

## BUG-02: Unusual Checkout Input Formats Are Accepted

**Module:** Checkout — Your Information  
**Status:** Behavior reproduced; defect not confirmed  
**Severity / Priority:** Pending requirement confirmation

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

If the product requirements restrict names to particular characters or require a specific postal-code format, invalid values should be rejected with a clear validation message.

### Actual Result

The application proceeded to the checkout overview without displaying a validation error for the supplied values.

### Potential Impact

If strict input validation is required, unexpected customer information may be accepted and could affect downstream processing or data quality.

### Evidence

Attach the actual checkout-form screenshot and the resulting checkout-overview screenshot. Add their real repository-relative paths here.

### Evidence

- [Checkout screenshot — 19:28:41](<evidence/screenshots/Screenshot 2026-10-19 173032.png>)

### Classification

I tested these inputs and found that the application accepts them without a validation error. Since the exact validation rules aren’t specified, this may be a validation gap rather than a confirmed bug.

---

## BUG-03: No Visible Order or Invoice Reference on the Completion Screen

**Module:** Checkout / Order Confirmation  
**Status:** Exploratory observation; expected behavior unconfirmed  
**Severity / Priority:** Not assigned

### Steps to Reproduce

1. Log in using `standard_user`.
2. Add a product to the cart.
3. Enter the required checkout information.
4. Review the order overview.
5. Click **Finish**.
6. Inspect the order-completion screen.

### Expected Result

If order traceability is a product requirement, the completed order should display a unique reference that users can use to identify the transaction.

### Actual Result

During the observed flow, the completion screen displayed a success confirmation. No order or invoice reference was observed on that screen.

### Potential Impact

If users are expected to refer to individual orders when contacting support, the absence of a visible reference could make order identification more difficult.

### Evidence

Attach a screenshot or short recording of the actual completion screen if available. Add the real repository-relative path here.

- [Order receipt PDF](<evidence/screenshots/swag-labs-order-2026-10-19_13-00-43.pdf>)

### Classification

The missing order or invoice number may make order tracking and customer support difficult.If a unique reference is required, this could be considered a usability defect.


---

## Summary

| ID | Finding | Classification |
|---|---|---|
| BUG-01 | Empty-cart checkout | Reproduced defect candidate |
| BUG-02 | Unusual input formats accepted | Potential validation gap |
| BUG-03 | No visible order/invoice reference | Exploratory observation |

The findings are based on observed behavior. Expected behavior, severity, and priority should be confirmed against applicable product requirements before final defect classification.