import { test, expect } from "@playwright/test";
import { OurWorkFilters } from "../pages/OurWorkFilters";

test.beforeEach(async ({page}) => {
    await page.goto('https://www.lambdaworks.io');
  });

test('User is able to apply mobile development filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.mobileDevelopmentFilter();
    await expect(filters.superPhoneTitle).toBeVisible();
    await expect(filters.el3mentTitle).toBeVisible();
    await expect(filters.lifeLogsTitle).toBeVisible();
})

test('User is able to apply web development filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.webDevelopmentFilter();
    await expect(filters.superPhoneTitle).toBeVisible();
    await expect(filters.themesKingdomTitle).toBeVisible();
    await expect(filters.traderFylesTitle).toBeVisible();
    await expect(filters.exportOnlineTitle).toBeVisible();
    await expect(filters.nFMeTitle).toBeVisible();
    await expect(filters.bizzItTitle).toBeVisible();
    await expect(filters.everyBiteTitle).toBeVisible();
    await expect(filters.lifeLogsTitle).toBeVisible();
    await expect(filters.maniloTitle).toBeVisible();
    await expect(filters.nagNagTitle).toBeVisible();
    await expect(filters.shelfieTitle).toBeVisible();
})

test('User is able to apply business analytics filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.buisnessAnalyticsFilter();
    await expect(filters.superPhoneTitle).toBeVisible();
    await expect(filters.themesKingdomTitle).toBeVisible();
    await expect(filters.nFMeTitle).toBeVisible();
    await expect(filters.novakDjokovicTitle).toBeVisible();
})

test('User is able to apply AI filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.AIFilter();
    await expect(filters.el3mentTitle).toBeVisible();
    await expect(filters.bizzItTitle).toBeVisible();
    await expect(filters.everyBiteTitle).toBeVisible();
})

test('User is able to apply infrastructure filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.infrastructureFilter();
    await expect(filters.traderFylesTitle).toBeVisible();
    await expect(filters.el3mentTitle).toBeVisible();
    await expect(filters.novakDjokovicTitle).toBeVisible();
    await expect(filters.nagNagTitle).toBeVisible();
    await expect(filters.heraldTitle).toBeVisible();
})

test('User is able to apply product discovery filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.productDisoveryFilter();
    await expect(filters.traderFylesTitle).toBeVisible();
    await expect(filters.el3mentTitle).toBeVisible();
    await expect(filters.exportOnlineTitle).toBeVisible();
    await expect(filters.nFMeTitle).toBeVisible();
    await expect(filters.lifeLogsTitle).toBeVisible();
})

test('User is able to apply web3 filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.web3Filter();
    await expect(filters.nFMeTitle).toBeVisible();
})

test('User is able to apply LW product filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.lwProductFilter();
    await expect(filters.nagNagTitle).toBeVisible();
    await expect(filters.heraldTitle).toBeVisible();
    await expect(filters.lambertTitle).toBeVisible();
    await expect(filters.shelfieTitle).toBeVisible();
})

test('User is able to apply data engineering filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.dataEngineeringFilter();
    await expect(filters.superPhoneTitle).toBeVisible();
    await expect(filters.novakDjokovicTitle).toBeVisible();
    await expect(filters.everyBiteTitle).toBeVisible();
})

test('User is able to clear all filters', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearAllFilters();
    await expect(filters.heraldTitle).toBeVisible();
    await expect(filters.bexioTitle).toBeVisible();
    await expect(filters.nagNagTitle).toBeVisible();
})

test('User is able to remove mobile development filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearMobileDevelopmentFilter();
    await expect(filters.superPhoneTitle).toBeVisible();
    await expect(filters.novakDjokovicTitle).toBeVisible();
    await expect(filters.shelfieTitle).toBeVisible();
})

test('User is able to remove web development filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearWebDevelopmentFilter();
    await expect(filters.shelfieTitle).toBeVisible();
    await expect(filters.nFMeTitle).toBeVisible();
    await expect(filters.exportOnlineTitle).toBeVisible();
    await expect(filters.everyBiteTitle).toBeVisible();
})

test('User is able to remove buisness analytics filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearBuisnessAnalyticsFilter();
    await expect(filters.knowleTitle).toBeVisible();
    await expect(filters.lambertTitle).toBeVisible();
    await expect(filters.superPhoneTitle).toBeVisible();
})

test('User is able to remove AI filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearAIFilter();
    await expect(filters.bexioTitle).toBeVisible();
    await expect(filters.themesKingdomTitle).toBeVisible();
    await expect(filters.superPhoneTitle).toBeVisible();
})

test('User is able to remove infrastructure filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearInfrastructureFilter();
    await expect(filters.knowleTitle).toBeVisible();
    await expect(filters.lambertTitle).toBeVisible();
    await expect(filters.zioESTitle).toBeVisible();
    await expect(filters.heraldTitle).toBeVisible();
    await expect(filters.maniloTitle).toBeVisible();
    await expect(filters.lifeLogsTitle).toBeVisible();
})

test('User is able to remove product discovery filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearProductDisoveryFilter();
    await expect(filters.zioESTitle).toBeVisible();
    await expect(filters.heraldTitle).toBeVisible();
    await expect(filters.maniloTitle).toBeVisible();
})

test('User is able to remove web3 filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearWeb3Filter();
    await expect(filters.knowleTitle).toBeVisible();
    await expect(filters.lambertTitle).toBeVisible();
    await expect(filters.zioESTitle).toBeVisible();
    await expect(filters.heraldTitle).toBeVisible();
})

test('User is able to remove LW product filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearLwProductFilter();
    await expect(filters.shelfieTitle).toBeVisible();
    await expect(filters.nFMeTitle).toBeVisible();
    await expect(filters.exportOnlineTitle).toBeVisible();
})

test('User is able to remove open source filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearOpenSourceFilter();
    await expect(filters.knowleTitle).toBeVisible();
    await expect(filters.traderFylesTitle).toBeVisible();
    await expect(filters.exportOnlineTitle).toBeVisible();
    await expect(filters.nFMeTitle).toBeVisible();
    await expect(filters.bizzItTitle).toBeVisible();
    await expect(filters.everyBiteTitle).toBeVisible();
    await expect(filters.lifeLogsTitle).toBeVisible();
})

test('User is able to remove data engineering filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearDataEngineeringFilter();
    await expect(filters.everyBiteTitle).toBeVisible();
    await expect(filters.lifeLogsTitle).toBeVisible();
    await expect(filters.maniloTitle).toBeVisible();
    await expect(filters.nagNagTitle).toBeVisible();
    await expect(filters.shelfieTitle).toBeVisible();
})