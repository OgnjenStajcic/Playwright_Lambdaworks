import { Locator } from "@playwright/test";

export class OurWorkFilters {

    page: any;
    ourWorkPage: Locator;
    mobileDevelopment: Locator;
    superPhoneTitle: Locator;
    bexioTitle: Locator;
    el3mentTitle: Locator;
    webDevelopment: Locator;
    bexio: Locator;
    businessAnalytics: Locator;
    AI: Locator;
    infrastructure: Locator;
    productDiscovery: Locator;
    web3: Locator;
    lwProduct: Locator;
    openSource: Locator;
    dataEngineering: Locator;
    clearFilters: Locator;

    constructor(page){
        this.page = page;
        this.ourWorkPage = page.getByLabel('Our Work').first();
        this.mobileDevelopment = page.getByText('Mobile development', { exact: true });
        this.superPhoneTitle = page.getByRole('link', { name: 'SuperPhone' });
        this.el3mentTitle = page.getByRole('link', { name: 'el3ment' });
        this.webDevelopment = page.locator('span').filter({ hasText: 'Web development' });
        this.bexio = page.getByRole('link', { name: 'View project', exact: true });
        this.businessAnalytics = page.getByText('Business analytics', { exact: true });
        this.AI = page.locator('div').filter({ hasText: /^AI$/ }).first();
        this.infrastructure = page.locator('span').filter({ hasText: 'Infrastructure' });
        this.productDiscovery = page.locator('span').filter({ hasText: 'Product discovery' });
        this.web3 = page.locator('div').filter({ hasText: /^Web3$/ }).first();
        this.lwProduct = page.locator('div').filter({ hasText: /^LW product$/ }).first();
        this.openSource = page.locator('div:nth-child(9)').first();
        this.dataEngineering = page.locator('span').filter({ hasText: 'Data engineering' });
        this.clearFilters = page.getByText('Clear all filters');
    }

    async mobileDevelopmentFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.mobileDevelopment.click();
    }

    async clearMobileDevelopmentFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.mobileDevelopment.click();
        await this.mobileDevelopment.click();
    }

    async webDevelopmentFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.webDevelopment.click();
    }

    async clearWebDevelopmentFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.webDevelopment.click();
        await this.webDevelopment.click();
    }

    async buisnessAnalyticsFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.businessAnalytics.click();
    }

    async clearBuisnessAnalyticsFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.businessAnalytics.click();
        await this.businessAnalytics.click();
    }

    async AIFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.AI.click();
    }

    async clearAIFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.AI.click();
        await this.AI.click();
    }

    async infrastructureFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.infrastructure.click();
    }

    async clearInfrastructureFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.infrastructure.click();
        await this.infrastructure.click();
    }

    async productDisoveryFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.productDiscovery.click();
    }

    async clearProductDisoveryFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.productDiscovery.click();
        await this.productDiscovery.click();
    }

    async web3Filter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.web3.click();
    }

    async clearWeb3Filter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.web3.click();
        await this.web3.click();
    }

    async lwProductFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.lwProduct.click();
    }

    async clearLwProductFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.lwProduct.click();
        await this.lwProduct.click();
    }

    async openSourceFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.openSource.click();
    }

    async clearOpenSourceFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.openSource.click();
        await this.openSource.click();
    }

    async dataEngineeringFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.dataEngineering.click();
    }

    async clearDataEngineeringFilter(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.dataEngineering.click();
        await this.dataEngineering.click();
    }

    async clearAllFilters(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.AI.click();
        await this.lwProduct.click();
        await this.clearFilters.click();
    }

}