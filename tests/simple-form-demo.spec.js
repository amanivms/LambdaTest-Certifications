// tests/simple-form-demo.spec.js
const { test, expect } = require('@playwright/test');

test('Test Scenario 1', async ({ page }) => {
  // Step 1: Open LambdaTest’s Selenium Playground
  await page.goto('/');

  // Step 2: Click “Simple Form Demo” under Input Forms
  await page.click('text=Simple Form Demo');

  // Step 3: Validate that the URL contains “simple-form-demo”
  await expect(page).toHaveURL(/.*simple-form-demo/);

  // Step 4: Create a variable for a string value
  const message = "Welcome to LambdaTest";

  // Step 5: Enter the message in the text box
  await page.fill('input#user-message', message);

  // Step 6: Click “Get Checked Value”
  await page.click('#showInput');

  // Step 7: Validate whether the same text message is displayed
  const displayedMessage = await page.textContent('#message');
  expect(displayedMessage.trim()).toBe(message);
});
