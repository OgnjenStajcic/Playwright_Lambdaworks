import { test, expect } from "@playwright/test";
import { Header } from "../pages/Header";

test("User is able to screenshot product innovation page", async ({ page }) => {
  const projects = new Header(page);
  await projects.gotoProductInnovationPage();
  await expect(page).toHaveScreenshot();
});
