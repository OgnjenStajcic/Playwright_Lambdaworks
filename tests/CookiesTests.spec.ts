import { test, expect } from "@playwright/test";
import { CookiesModal } from "../pages/CookiesModal";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdaworks.io");
});

test("User is able to dismiss cookies", async ({ page }) => {
  const cookies = new CookiesModal(page);
  await cookies.dismissCookies();
  await expect(page).toHaveURL("https://www.lambdaworks.io/");
  await expect(cookies.dismiss).not.toBeVisible();
});

test("User is able to agree cookies by clicking on checkbox", async ({ page }) => {
  const cookies = new CookiesModal(page);
  await cookies.agreeCookiesCheckbox();
  await expect(page).toHaveURL("https://www.lambdaworks.io/");
  await expect(cookies.agreeCheckbox).not.toBeVisible();
});

test('User is able to agree cookies by clicking on text "I agree"', async ({ page }) => {
  const cookies = new CookiesModal(page);
  await cookies.agreeCookiesText();
  await expect(page).toHaveURL("https://www.lambdaworks.io/");
  await expect(cookies.agreeText).not.toBeVisible();
});
