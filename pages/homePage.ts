import { expect } from "@playwright/test";

export class homePage {

page: any;
ourWork: any;
careers: any;

constructor(page){
        this.page = page  
        this.ourWork = page.getByLabel('Our Work');
        this.careers = page.getByLabel('Careers');
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


}