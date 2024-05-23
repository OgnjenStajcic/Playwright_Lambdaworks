import { test, expect } from "@playwright/test";
import { Header } from "../pages/Header";
import { ProductInnovationHiddenElements } from "../pages/ProductInnovationHiddenElements";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdaworks.io");
});

test("User is able to screenshot product innovation page", async ({ page }) => {
  const projects = new Header(page);
  const element = new ProductInnovationHiddenElements(page);
  await projects.gotoProductInnovationPage();
  await expect(page).toHaveScreenshot({ fullPage: true, mask: [element.hiddenElement] });
});
