import { test, expect } from '@playwright/test';

test('popup', async ({ page }) => {
  // Go to Cleartrip
  await page.goto('https://www.cleartrip.com/');

  // Wait for mobile input to be visible and fill it
  await page.locator('#mobile').waitFor({ state: 'visible' });
  await page.locator('#mobile').fill('124');

  // Wait for the popup to appear and then close it
  const closeIcon = page.getByTestId('closeIcon');
  await closeIcon.waitFor({ state: 'visible' });
  await closeIcon.click();

  // Optionally assert that popup is closed
  await expect(closeIcon).toBeHidden();
});
