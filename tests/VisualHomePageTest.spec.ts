import { test, expect } from "@playwright/test";
import { Header } from "../pages/Header";

test.beforeEach(async ({ page }, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 50000);
  await page.goto("https://www.lambdaworks.io");
});

test("User is able to screenshot home page", async ({ page }) => {
  const projects = new Header(page);
  //await projects.gotoHomePage();
  await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixels: 100, mask: [projects.awesome] });
});
