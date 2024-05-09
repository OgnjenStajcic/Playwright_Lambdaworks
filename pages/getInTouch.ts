import { Locator } from "@playwright/test";

export class GetInTouch {

    page: any;
    getInTouch: Locator;

    constructor (page){
        this.page = page;
        this.getInTouch = page.locator('a').filter({ hasText: 'Get in touch' });
    }

    async gotoContactForm(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.getInTouch.click();
    }

}