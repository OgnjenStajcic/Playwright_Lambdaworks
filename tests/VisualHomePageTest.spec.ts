import { test, expect } from "@playwright/test";
import { HomePageHiddenElements } from "../pages/HomePageHiddenElements";

test.beforeEach(async ({ page }, testInfo) => {
  testInfo.setTimeout(testInfo.timeout + 50000);
  await page.goto("https://www.lambdaworks.io");
});

test("User is able to screenshot home page", async ({ page }) => {
  const element = new HomePageHiddenElements(page);
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [
      element.awesome,
      element.animation1,
      element.animation2,
      element.leftHalf,
      element.rightHalf,
      element.projectList,
      element.projectPicture,
    ],
  });
});
