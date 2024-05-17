import { test, expect } from "@playwright/test";
import { Header } from "../pages/Header";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdaworks.io");
});

// await page.screenshot({
//     blackout: [
//       page.locator('.my-dynamic-element'),
//       page.locator('.some-video'),
//     ],
//   });

test("User is able to screenshot careers page", async ({ page }) => {
  const projects = new Header(page);
  await projects.gotoCareersPage();
  //await page.getByRole('link').screenshot({ animations: 'disabled', path: 'link.png' });
  //await page.screenshot({ fullPage: true});
  await expect(page).toHaveScreenshot({
    mask: [projects.awesome],
  });
});

//await page.screenshot({ path: 'screenshot.png', fullPage: true });

// test('User is able to screenshot careers page', async ({page}) => {
//     const projects = new Header(page);
//     await projects.screenshot({
//         blackout:
//           projects.awesome
//       });
// })
