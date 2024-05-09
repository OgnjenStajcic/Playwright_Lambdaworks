import { test, expect } from "@playwright/test";
import { OurWorkFilters } from "../pages/OurWorkFilters";

test('User is able to apply mobile development filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.mobileDevelopmentFilter;
    //await expect(filters.superPhoneTitle).toHaveText('SuperPhone');
    //await expect(filters.el3mentTitle).toBeVisible();
})

test('User is able to apply web development filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.webDevelopmentFilter();
    //await expect(filters.superPhoneTitle).toHaveText('SuperPhone');
    await expect(filters.webDevelopment).toBeVisible();
})

test('User is able to apply business analytics filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.buisnessAnalyticsFilter();
})

test('User is able to apply AI filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.AIFilter();
})

test('User is able to apply infrastructure filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.infrastructureFilter();
})

test('User is able to apply product discovery filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.productDisoveryFilter();
})

test('User is able to apply web3 filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.web3Filter();
})

test('User is able to apply LW product filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.lwProductFilter();
})

test('User is able to apply data engineering filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.dataEngineeringFilter();
})

test('User is able to clear all filters', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearAllFilters();
})

test('User is able to remove mobile development filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearMobileDevelopmentFilter();
})

test('User is able to remove web development filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearWebDevelopmentFilter();
})

test('User is able to remove buisness analytics filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearBuisnessAnalyticsFilter();
})

test('User is able to remove AI filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearAIFilter();
})

test('User is able to remove infrastructure filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearInfrastructureFilter();
})

test('User is able to remove product discovery filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearProductDisoveryFilter();
})

test('User is able to remove web3 filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearWeb3Filter();
})

test('User is able to remove LW product filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearLwProductFilter();
})

test('User is able to remove open source filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearOpenSourceFilter();
})

test('User is able to remove data engineering filter by clicking again on applied filter', async ({page}) => {
    const filters = new OurWorkFilters(page);
    await filters.clearDataEngineeringFilter();
})