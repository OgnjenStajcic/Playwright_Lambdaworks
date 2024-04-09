import { expect } from "@playwright/test";

export class ourWork {

    page: any;
    superPhone: any;
    superPhoneHeader : any;
    bexio: any;
    bexioText: any;
    themesKingdom: any;
    element: any;

constructor(page){
        this.page = page  
        this.superPhone = page.getByRole('link', { name: 'SuperPhone' });
        this.superPhoneHeader = page.getByText('Marketing platform for the');
        this.bexio = page.getByRole('link', { name: 'bexio' });
        this.bexioText = page.getByText('bexio is a Swiss-based SME');
        //this.themesKingdom.getByRole('link', { name: 'ThemesKingdom' });
        //this.element.getByRole('link', { name: 'el3ment' });
    }

async gotoSuperPhonePage (){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.page.ourWork.click();
    await this.superPhone.click();
    await expect(this.page.superPhoneHeader).toHaveText('Marketing platform for the big leagues');
}

async gotoBexioPage (){
    await this.page.goto('https://www.lambdaworks.io/');
    await this.page.ourWork.click();
    await this.bexio.click();
    await expect(this.page.bexioText).toContainText('bexio is a Swiss-based SME management platform');
}














}