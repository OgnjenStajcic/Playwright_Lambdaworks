import { test, expect } from "@playwright/test";
import { OurWorkFilters } from "../pages/OurWorkFilters";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdaworks.io");
});

test("User is able to apply mobile development filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.mobileDevelopmentFilter();
  await expect.soft(filters.superPhoneTitle).toBeVisible();
  await expect.soft(filters.el3mentTitle).toBeVisible();
  await expect.soft(filters.lifeLogsTitle).toBeVisible();
});

test("User is able to apply web development filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.webDevelopmentFilter();
  await expect.soft(filters.superPhoneTitle).toBeVisible();
  await expect.soft(filters.themesKingdomTitle).toBeVisible();
  await expect.soft(filters.traderFylesTitle).toBeVisible();
  await expect.soft(filters.exportOnlineTitle).toBeVisible();
  await expect.soft(filters.nFMeTitle).toBeVisible();
  await expect.soft(filters.bizzItTitle).toBeVisible();
  await expect.soft(filters.everyBiteTitle).toBeVisible();
  await expect.soft(filters.lifeLogsTitle).toBeVisible();
  await expect.soft(filters.maniloTitle).toBeVisible();
  await expect.soft(filters.nagNagTitle).toBeVisible();
  await expect.soft(filters.shelfieTitle).toBeVisible();
});

test("User is able to apply business analytics filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.buisnessAnalyticsFilter();
  await expect.soft(filters.superPhoneTitle).toBeVisible();
  await expect.soft(filters.themesKingdomTitle).toBeVisible();
  await expect.soft(filters.nFMeTitle).toBeVisible();
  await expect.soft(filters.novakDjokovicTitle).toBeVisible();
});

test("User is able to apply AI filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.AIFilter();
  await expect.soft(filters.el3mentTitle).toBeVisible();
  await expect.soft(filters.bizzItTitle).toBeVisible();
  await expect.soft(filters.everyBiteTitle).toBeVisible();
});

test("User is able to apply infrastructure filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.infrastructureFilter();
  await expect.soft(filters.traderFylesTitle).toBeVisible();
  await expect.soft(filters.el3mentTitle).toBeVisible();
  await expect.soft(filters.novakDjokovicTitle).toBeVisible();
  await expect.soft(filters.nagNagTitle).toBeVisible();
  await expect.soft(filters.heraldTitle).toBeVisible();
});

test("User is able to apply product discovery filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.productDisoveryFilter();
  await expect.soft(filters.traderFylesTitle).toBeVisible();
  await expect.soft(filters.el3mentTitle).toBeVisible();
  await expect.soft(filters.exportOnlineTitle).toBeVisible();
  await expect.soft(filters.nFMeTitle).toBeVisible();
  await expect.soft(filters.lifeLogsTitle).toBeVisible();
});

test("User is able to apply web3 filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.web3Filter();
  await expect.soft(filters.nFMeTitle).toBeVisible();
});

test("User is able to apply LW product filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.lwProductFilter();
  await expect.soft(filters.nagNagTitle).toBeVisible();
  await expect.soft(filters.heraldTitle).toBeVisible();
  await expect.soft(filters.lambertTitle).toBeVisible();
  await expect.soft(filters.shelfieTitle).toBeVisible();
});

test("User is able to apply data engineering filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.dataEngineeringFilter();
  await expect.soft(filters.superPhoneTitle).toBeVisible();
  await expect.soft(filters.novakDjokovicTitle).toBeVisible();
  await expect.soft(filters.everyBiteTitle).toBeVisible();
});

test("User is able to clear all filters", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearAllFilters();
  await expect.soft(filters.heraldTitle).toBeVisible();
  await expect.soft(filters.bexioTitle).toBeVisible();
  await expect.soft(filters.nagNagTitle).toBeVisible();
});

test("User is able to remove mobile development filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearMobileDevelopmentFilter();
  await expect.soft(filters.superPhoneTitle).toBeVisible();
  await expect.soft(filters.novakDjokovicTitle).toBeVisible();
  await expect.soft(filters.shelfieTitle).toBeVisible();
});

test("User is able to remove web development filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearWebDevelopmentFilter();
  await expect.soft(filters.shelfieTitle).toBeVisible();
  await expect.soft(filters.nFMeTitle).toBeVisible();
  await expect.soft(filters.exportOnlineTitle).toBeVisible();
  await expect.soft(filters.everyBiteTitle).toBeVisible();
});

test("User is able to remove buisness analytics filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearBuisnessAnalyticsFilter();
  await expect.soft(filters.knowleTitle).toBeVisible();
  await expect.soft(filters.lambertTitle).toBeVisible();
  await expect.soft(filters.superPhoneTitle).toBeVisible();
});

test("User is able to remove AI filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearAIFilter();
  await expect.soft(filters.bexioTitle).toBeVisible();
  await expect.soft(filters.themesKingdomTitle).toBeVisible();
  await expect.soft(filters.superPhoneTitle).toBeVisible();
});

test("User is able to remove infrastructure filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearInfrastructureFilter();
  await expect.soft(filters.knowleTitle).toBeVisible();
  await expect.soft(filters.lambertTitle).toBeVisible();
  await expect.soft(filters.zioESTitle).toBeVisible();
  await expect.soft(filters.heraldTitle).toBeVisible();
  await expect.soft(filters.maniloTitle).toBeVisible();
  await expect.soft(filters.lifeLogsTitle).toBeVisible();
});

test("User is able to remove product discovery filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearProductDisoveryFilter();
  await expect.soft(filters.zioESTitle).toBeVisible();
  await expect.soft(filters.heraldTitle).toBeVisible();
  await expect.soft(filters.maniloTitle).toBeVisible();
});

test("User is able to remove web3 filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearWeb3Filter();
  await expect.soft(filters.knowleTitle).toBeVisible();
  await expect.soft(filters.lambertTitle).toBeVisible();
  await expect.soft(filters.zioESTitle).toBeVisible();
  await expect.soft(filters.heraldTitle).toBeVisible();
});

test("User is able to remove LW product filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearLwProductFilter();
  await expect.soft(filters.shelfieTitle).toBeVisible();
  await expect.soft(filters.nFMeTitle).toBeVisible();
  await expect.soft(filters.exportOnlineTitle).toBeVisible();
});

test("User is able to remove open source filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearOpenSourceFilter();
  await expect.soft(filters.knowleTitle).toBeVisible();
  await expect.soft(filters.traderFylesTitle).toBeVisible();
  await expect.soft(filters.exportOnlineTitle).toBeVisible();
  await expect.soft(filters.nFMeTitle).toBeVisible();
  await expect.soft(filters.bizzItTitle).toBeVisible();
  await expect.soft(filters.everyBiteTitle).toBeVisible();
  await expect.soft(filters.lifeLogsTitle).toBeVisible();
});

test("User is able to remove data engineering filter by clicking again on applied filter", async ({ page }) => {
  const filters = new OurWorkFilters(page);
  await filters.clearDataEngineeringFilter();
  await expect.soft(filters.everyBiteTitle).toBeVisible();
  await expect.soft(filters.lifeLogsTitle).toBeVisible();
  await expect.soft(filters.maniloTitle).toBeVisible();
  await expect.soft(filters.nagNagTitle).toBeVisible();
  await expect.soft(filters.shelfieTitle).toBeVisible();
});
