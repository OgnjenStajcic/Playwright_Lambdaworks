import { expect } from "@playwright/test";
import { homePage } from "./homePage";

export class careers {

    page: any;
    linkedln: any;
    //instagram: any;


    constructor (page){
        this.page = page;
        this.linkedln = page.getByLabel('LinkedIn', { exact: true });
    }

    async gotoLinkedlnAccount(){
        await this.page.goto('https://www.lambdaworks.io/');
        await this.page.careers.click();
        await expect(this.page.toHaveURL('https://www.linkedin.com/company/lambdaworksio/'));
    }







}