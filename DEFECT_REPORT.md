# SauceDemo Defect Report

## BUG-01: Checkout can be completed with an empty cart

**Module:** Cart / Checkout  
**Status:** Reproduced  
**Severity:** Medium (provisional)  
**Priority:** P2 (provisional)

**Steps to Reproduce**
1. Log in as `standard_user`.
2. Keep the cart empty.
3. Navigate to Checkout.
4. Enter the required checkout information.
5. Click Continue.
6. Observe the order summary.
7. Click Finish.

**Expected Result:** The application should prevent order completion when the cart contains no products.

**Actual Result:** The application displays order completion confirmation and generates a receipt with an item total, tax, and total of $0.00.

**Impact:** Users can receive an order confirmation for an order containing no products.

**Evidence:** Checkout overview screenshot, completion screenshot, and generated order receipt.

**Note:** Confirm intended application behavior before final severity classification.

---

## BUG-02: Unusual checkout input formats are accepted

**Module:** Checkout — Your Information  
**Status:** Behavior reproduced; defect not yet confirmed  
**Severity/Priority:** Pending requirement confirmation

**Test Data**
- First Name: `4321`
- Last Name: `4567`
- Postal Code: `431401demo`

**Steps to Reproduce**
1. Log in as `standard_user`.
2. Add a product to the cart.
3. Open Checkout.
4. Enter the test data above.
5. Click Continue.

**Expected Result:** If the requirements prohibit numeric names or require a specific postal-code format, the application should reject invalid values.

**Actual Result:** The application navigated to the checkout overview without displaying a validation error.

**Impact:** If strict input validation is required, invalid customer information may be accepted.

**Evidence:** Checkout form screenshot and checkout overview.

**Next Action:** Confirm input validation requirements before reporting this as a confirmed defect.
