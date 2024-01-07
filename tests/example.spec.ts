import { test, expect } from '@playwright/test';


// test.beforeEach(async ({ page }) => {
//   await page.goto("http://localhost:4200/")
//   await page.getByText('Forms').click()
//   await page.getByText('Form Layouts').click()
// });  

// test("role", async ({ page }) => {
//   await page.getByRole('textbox', { name: "Email" }).first().click()
// })


// test("childAndParenElement", async ({ page }) => {
//   //child selecting
//   await page.locator('nb-card nb-radio :text-is("Option 1")').click()
//   await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

//   await page.locator('nb-card').getByRole('button', { name: 'Sign In' }).first().click()

//   // avoid using this , Html index can be change quite ofter
//   await page.locator('nb-card').nth(3).getByRole('button').click()

//   //Parent selecting
//   await page.locator('nb-card', { hasText: "Using The Grid" }).getByRole('textbox', { name: "Email" }).click()
//   await page.locator('nb-card').filter({ hasText: "Basic form" }).getByRole('textbox', { name: "Email" }).click()

//   await page.locator('nb-card').filter({ has: page.locator('nb-checkbox') }).filter({ hasText: 'Sign In' })
//     .getByRole('textbox', { name: "Email" }).click()
// })


test('api', async ({ request }) => {
  const newIssue = await request.get(`/todos/1`);
  expect(newIssue.ok()).toBeTruthy();
});


