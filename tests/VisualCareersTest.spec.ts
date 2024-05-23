import { test, expect } from "@playwright/test";
import { Header } from "../pages/Header";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdaworks.io");
});

test("User is able to screenshot careers page", async ({ page }) => {
  const projects = new Header(page);
  await projects.gotoCareersPage();
  await expect(page).toHaveScreenshot({ fullPage: true });
});
