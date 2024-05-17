import { test, expect } from "@playwright/test";
import { Header } from "../pages/Header";

test("User is able to screenshot product tech excellence page", async ({ page }) => {
  const projects = new Header(page);
  await projects.gotoTechExcellencePage();
  await expect(page).toHaveScreenshot();
});
