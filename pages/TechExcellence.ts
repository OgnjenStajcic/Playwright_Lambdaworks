import { Locator} from "@playwright/test";

export class TechExcellence{

    page: any;
    techRadar: Locator;
    techExcellence: Locator;
    carousel1: Locator;
    carousel2: Locator;
    carousel3: Locator;
    bexio: Locator;
    novakDjokovicFoundation: Locator;
    manilo: Locator;
    letsTalk: Locator;

    constructor(page){
        this.page = page;
        this.techExcellence = page.getByLabel('Tech Excellence').first();
        this.techRadar = page.getByRole('button', { name: 'Go to Tech Radar' });
        this.carousel1 = page.getByRole('button', { name: '01' });
        this.carousel2 = page.getByRole('button', { name: '02' });
        this.carousel3 = page.getByRole('button', { name: '03' });
        this.bexio = page.getByRole('button', { name: 'bexio' });
        this.novakDjokovicFoundation = page.getByRole('button', { name: 'Novak Djokovic Foundation' });
        this.manilo = page.getByRole('button', { name: 'Manilo' });
        this.letsTalk = page.getByRole('button', { name: 'Let\'s talk' });
    }

    async gotoTechRadar(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.techExcellence.click();
        await this.techRadar.click();
    }

    async carousel1Click(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.techExcellence.click();
        await this.carousel1.click();
    }

    async carousel2Click(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.techExcellence.click();
        await this.carousel2.click();
    }

    async carousel3Click(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.techExcellence.click();
        await this.carousel3.click();
    }

    async gotoContactPage(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.techExcellence.click();
        await this.letsTalk.click();
    }

}