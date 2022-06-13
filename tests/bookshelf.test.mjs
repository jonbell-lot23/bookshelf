import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://bookshelf.lot23.com/
  await page.goto('https://bookshelf.lot23.com/');

  // Click text=0-Bookshelf
  await page.locator('text=0-Bookshelf').click();

  // Click text=1-The Test Project
  await page.locator('text=1-The Test Project').click();
		
  // Click text=2-Tinker Bell
  await page.locator('text=2-Tinker Bell').click();

  // Click text=3-The things I gotta do
  await page.locator('text=3-The things I gotta do').click();
  
  // I should add some assertions later
  
  
});