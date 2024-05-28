// tests/input-form-submit.spec.js
const { test, expect } = require('@playwright/test');

test('Input Form Submit - Validate error and success messages', async ({ page }) => {
  // Step 1: Open the specified URL
  await page.goto('/');

  // Step 2: Click "Input Form Submit" under "Input Forms"
  await page.click('text=Input Form Submit');

  // Step 3: Click "Submit" without filling in any information
  await page.click('button[type="submit"]');

  // Step 4: Assert "Please fill in the fields" error message
  const errorMessage = await page.locator('text=Please fill in the fields').textContent();
  expect(errorMessage).toContain('Please fill in the fields');

  // Step 5: Fill in Name, Email, and other fields
  await page.fill('input[name="name"]', 'John Doe');
  await page.fill('input[name="email"]', 'john.doe@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="company"]', 'Example Inc.');
  await page.fill('input[name="website"]', 'www.example.com');
  await page.fill('input[name="city"]', 'New York');
  await page.fill('input[name="address_line1"]', '123 Example St.');
  await page.fill('input[name="address_line2"]', 'Apt 456');
  await page.fill('input[name="state"]', 'NY');
  await page.fill('input[name="zip"]', '10001');

  // Step 6: From the Country drop-down, select "United States" using the text property
  await page.selectOption('select[name="country"]', { label: 'United States' });

  // Step 7: Fill all fields and click "Submit"
  await page.click('button[type="submit"]');

  // Step 8: Once submitted, validate the success message
  const successMessage = await page.locator('text=Thanks for contacting us, we will get back to you shortly.').textContent();
  expect(successMessage).toContain('Thanks for contacting us, we will get back to you shortly.');
});
