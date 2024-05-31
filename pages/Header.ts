import { Locator } from "@playwright/test";

export class Header {

page: any;
ourWork: Locator;
careers: Locator;
productInnovation: Locator;
techExcellence: Locator;
lambdaWorks: Locator;

constructor(page){
    this.page = page;
    this.ourWork = page.getByLabel('Our Work').first();
    this.careers = page.getByLabel('Careers').first();
    this.productInnovation = page.getByLabel('Product Innovation').first();
    this.techExcellence = page.getByLabel('Tech Excellence').first();
    this.lambdaWorks = page.getByLabel('home-icon', { exact: true });
    }

async gotoOurWorkPage (){
    await this.page.goto('https://www.lambdaworks.io');
    await this.ourWork.click();
}

async gotoCareersPage(){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.careers.click();
}

async gotoProductInnovationPage(){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.productInnovation.click();
}

async gotoTechExcellencePage(){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.techExcellence.click();
}

async gotoHomePage(){
    await this.page.goto('https://www.lambdaworks.io/careers');
    await this.lambdaWorks.click();
}


}

