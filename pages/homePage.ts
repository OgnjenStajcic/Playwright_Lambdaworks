import { expect } from "@playwright/test";

export class homePage {

page: any;
ourWork: any;
careers: any;
getInTouch: any;
cookiesAgree: any;
cookiesModal: any;

constructor(page){
        this.page = page  
        this.ourWork = page.getByLabel('Our Work');
        this.careers = page.getByLabel('Careers');
        this.getInTouch = page.getByRole('link', { name: 'Get in touch' }).nth(1);
        this.cookiesAgree = page.getByText('I agree');
        this.cookiesModal = page.locator('#gatsby-focus-wrapper div').filter({ hasText: 'By using our site you agree' }).nth(2);
    }


async gotoOurWorkPage (){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.page.ourWork.click();
    await expect(this.page.getByRole('link', { name: 'SuperPhone' })).toHaveText('SuperPhone');
}

async gotoCareersPage(){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.page.careers.click();
    await expect(this.page).toHaveURL('https://www.lambdaworks.io/careers');
}

async getIntouch (){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.page.getInTouch.click();
}

async acceptCookies(){
    await this.page.goto('https://www.lambdaworks.io/');
    await expect(this.page.cookiesModal).toContainText('By using our site you agree');
    await this.page.cookiesAgree.click();
    await expect(this.page.cookiesAgree).toBeChecked();
}

}