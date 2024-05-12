import { Locator } from "@playwright/test";

export class CookiesModal{

    page: any;
    dismiss: Locator;
    agreeCheckbox: Locator;
    agreeText: Locator;

    constructor(page){
        this.page = page;
        this.dismiss = page.getByText('Dismiss');
        this.agreeCheckbox = page.getByLabel('I agree');
        this.agreeText = page.getByText('I agree');
    }

    async dismissCookies(){
        await this.dismiss.click();
    }

    async agreeCookiesCheckbox(){
        await this.agreeCheckbox.click();
    }

    async agreeCookiesText(){
        await this.agreeText.click();
    }
}