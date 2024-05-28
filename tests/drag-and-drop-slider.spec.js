// tests/drag-and-drop-slider.spec.js
const { test, expect } = require('@playwright/test');

test('Drag & Drop Sliders - Set value to 95', async ({ page }) => {
  // Step 1: Open the specified URL
  await page.goto('/');

  // Step 2: Click "Drag & Drop Sliders" under "Progress Bars & Sliders"
  await page.click('text=Drag & Drop Sliders');

  // Step 3: Select the slider with "Default value 15"
  const slider = page.locator('input[type="range"][value="15"]');

  // Step 4: Drag the slider to the right to set its value to 95
  await slider.evaluate(slider => {
    slider.value = 95;
    const event = new Event('input', { bubbles: true });
    slider.dispatchEvent(event);
  });

  // Step 5: Validate that the range value shows 95
  const rangeValue = await page.locator('#rangeSuccess').textContent();
  expect(rangeValue.trim()).toBe('95');
});
