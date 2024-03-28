//import { test, expect } from '@playwright/test';

const { expect , test} = require("@playwright/test")
test('has title', async ({ page }) => {
  const productName = 'PlayStation 5';
  const productCategory = 'Video Games';
  const productBrand = 'Sony';

  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Email or mobile phone number').click();
  await page.getByLabel('Email or mobile phone number').fill('6360830759');
  await page.getByLabel('Continue').click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('O');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Om@58tyam');
  await page.getByLabel('Sign in', { exact: true }).click();
 // await page.timeout(5000)
 await page.locator("//input[@aria-label='Search Amazon']").click()
 await page.locator("//input[@aria-label='Search Amazon']").fill(productName)
 await page.click('input[type="submit"]');

 await page.locator("//input[@aria-label='Search Amazon']").click()
 await page.locator("//input[@aria-label='Search Amazon']").fill(productCategory)
 await page.click('input[type="submit"]');

 await page.locator("//input[@aria-label='Search Amazon']").click()
 await page.locator("//input[@aria-label='Search Amazon']").fill(productBrand)
 await page.click('input[type="submit"]');

 //click on add to cart

 await page.locator("//button[contains(text(),'Add to cart')]").nth(0).click()
 await page.locator("//span[contains(@class,'nav-line-2')]").nth(4).click()

 //click on proceed to chechout

 await page.locator("//input[@value='Proceed to checkout']").click()
});


  
 
