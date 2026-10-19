
import { test, expect } from '@playwright/test';

test('user completes checkout successfully', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  const backpack = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' });

  await backpack.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByTestId('firstName').fill('QA');
  await page.getByTestId('lastName').fill('Engineer');
  await page.getByTestId('postalCode').fill('380001');

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await expect(page.locator('.summary_subtotal_label'))
    .toHaveText('Item total: $29.99');

  await expect(page.locator('.summary_tax_label')).toContainText('$2.40');
  await expect(page.locator('.summary_total_label')).toContainText('$32.39');

  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(page).toHaveURL(/checkout-complete\.html/);
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});

test('checkout accepts unusual input formats', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const backpack = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' });

  await backpack.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('.shopping_cart_link').click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByTestId('firstName').fill('4321');
  await page.getByTestId('lastName').fill('4567');
  await page.getByTestId('postalCode').fill('431401demo');

  await page.getByRole('button', { name: 'Continue' }).click();

  // Record the observed behavior without assuming it is a defect.
  await expect(page).toHaveURL(/checkout-step-two\.html/);
});
