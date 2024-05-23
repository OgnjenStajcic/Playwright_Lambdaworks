import { test, expect } from "@playwright/test";
import { Header } from "../pages/Header";
import { TechExcellenceHiddenElements } from "../pages/TechExcellenceHiddenElements";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdaworks.io");
});

test("User is able to screenshot product tech excellence page", async ({ page }) => {
  const projects = new Header(page);
  const element = new TechExcellenceHiddenElements(page);
  await projects.gotoTechExcellencePage();
  await expect(page).toHaveScreenshot({ fullPage: true, mask: [element.hiddenElement] });
});
