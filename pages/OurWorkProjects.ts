import { Locator } from "@playwright/test"; 

export class OurWorkProjects{

    page: any;
    superPhonePicture: Locator;
    superPhoneTitle: Locator;
    superPhoneView: Locator;
    ourWorkPage: Locator;
    bexioPicture: Locator;
    bexioTitle: Locator;
    bexioView: Locator;
    themesKingdomPicture: Locator;
    themesKingdomTitle: Locator;
    el3mentPicture: Locator;
    el3mentTitle: Locator;
    traderFylesPictures: Locator;
    traderFylesTitle: Locator;
    exportOnlinePicture: Locator;
    exportOnlineTitle: Locator;
    nFMePicture: Locator;
    nFMeTitle: Locator;
    bizzItPicture: Locator;
    bizzItTitle: Locator;
    everyBitePicture: Locator;
    everyBiteTitle: Locator;
    lifeLogsPicture: Locator;
    lifeLogsTitle: Locator;
    novakDjokovicPicture: Locator;
    novakDjokovicTitle: Locator;
    maniloPicture: Locator;
    maniloTitle: Locator;
    maniloView: Locator;
    nagNagPicture: Locator;
    nagNagTitle: Locator;
    heraldPictures: Locator;
    heraldTitle: Locator;
    heraldView: Locator;
    knowlePicture: Locator;
    knowleTitle: Locator;
    knowleView: Locator;
    lambertPicture: Locator;
    lambertTitle: Locator;
    lambertView: Locator;
    shelfiePicture: Locator;
    shelfieTitle: Locator;
    shelfieView: Locator;
    zioESPicture: Locator;
    zioESTitle: Locator;
    zioESView: Locator;


    constructor(page){
        this.page = page;
        this.superPhonePicture = page.locator('.workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a').first();
        this.ourWorkPage = page.getByLabel('Our Work').first();
        this.superPhoneTitle = page.getByRole('link', { name: 'SuperPhone' });
        this.superPhoneView = page.locator('.buttonStyle__StyledButtonMainContainer-sc-1vbcyil-0').first();
        this.bexioPicture = page.locator('div').filter({ hasText: /^Viewproject2021bexioWeb development,InfrastructureView Project$/ }).getByRole('link').first();
        this.bexioTitle = page.getByRole('link', { name: 'bexio' });
        this.bexioView = page.locator('div').filter({ hasText: /^Viewproject2021bexioWeb development,InfrastructureView Project$/ }).getByRole('button');
        this.themesKingdomPicture = page.locator('div:nth-child(6) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.themesKingdomTitle = page.getByRole('link', { name: 'ThemesKingdom' });
        this.el3mentPicture = page.locator('div:nth-child(7) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.el3mentTitle = page.getByRole('link', { name: 'el3ment' });
        this.traderFylesPictures = page.locator('div:nth-child(8) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.traderFylesTitle = page.getByRole('link', { name: 'TraderFyles' });
        this.exportOnlinePicture = page.locator('div:nth-child(9) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.exportOnlineTitle = page.getByRole('link', { name: 'ExportOnline' });
        this.nFMePicture = page.locator('div:nth-child(10) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.nFMeTitle = page.getByRole('link', { name: 'NF.Me' });
        this.bizzItPicture = page.locator('div').filter({ hasText: /^Viewproject2019BizzItWeb development,AI,InfrastructureView Project$/ }).getByRole('link').first();
        this.bizzItTitle = page.getByRole('link', { name: 'BizzIt' });
        this.everyBitePicture = page.locator('div:nth-child(12) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.lifeLogsPicture = page.locator('div:nth-child(13) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.everyBiteTitle = page.getByRole('link', { name: 'EveryBite' });
        this.lifeLogsTitle = page.getByRole('link', { name: 'LifeLogs' });
        this.novakDjokovicPicture = page.locator('div:nth-child(14) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.novakDjokovicTitle = page.getByRole('link', { name: 'Novak Djokovic Foundation' });
        this.maniloPicture = page.locator('div').filter({ hasText: /^Viewproject2020MANILOWeb developmentView Project$/ }).getByRole('link').first();
        this.maniloTitle = page.getByRole('link', { name: 'MANILO' });
        this.maniloView = page.locator('div').filter({ hasText: /^Viewproject2020MANILOWeb developmentView Project$/ }).getByRole('button');
        this.nagNagPicture = page.locator('div:nth-child(16) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a');
        this.nagNagTitle = page.getByRole('link', { name: 'NagNag' });
        this.heraldPictures = page.locator('div').filter({ hasText: /^Viewproject2023HeraldInfrastructure,Mobile development,LW productView Project$/ }).getByRole('link').first();
        this.heraldTitle = page.getByRole('link', { name: 'Herald' });
        this.heraldView = page.locator('div').filter({ hasText: /^Viewproject2023HeraldInfrastructure,Mobile development,LW productView Project$/ }).getByRole('button');
        this.knowlePicture = page.locator('div').filter({ hasText: /^Viewproject2023KnowleOpen sourceView Project$/ }).getByRole('link').first();
        this.knowleTitle = page.getByRole('link', { name: 'Knowle' });
        this.knowleView = page.locator('div').filter({ hasText: /^Viewproject2023KnowleOpen sourceView Project$/ }).getByRole('button');
        this.lambertPicture = page.locator('div').filter({ hasText: /^Viewproject2021LambertLW product,InfrastructureView Project$/ }).getByRole('link').first();
        this.lambertTitle = page.getByRole('link', { name: 'Lambert' });
        this.lambertView = page.locator('div').filter({ hasText: /^Viewproject2021LambertLW product,InfrastructureView Project$/ }).getByRole('button');
        this.shelfiePicture = page.locator('div').filter({ hasText: /^Viewproject2023ShelfieWeb development,LW product,InfrastructureView Project$/ }).getByRole('link').first();
        this.shelfieTitle = page.getByRole('link', { name: 'Shelfie' });
        this.shelfieView = page.locator('div').filter({ hasText: /^Viewproject2023ShelfieWeb development,LW product,InfrastructureView Project$/ }).getByRole('button');
        this.zioESPicture = page.locator('div').filter({ hasText: /^Viewproject2023ZIO ESOpen sourceView Project$/ }).getByRole('link').first();
        this.zioESTitle = page.getByRole('link', { name: 'ZIO ES' });
        this.zioESView = page.locator('div').filter({ hasText: /^Viewproject2023ZIO ESOpen sourceView Project$/ }).getByRole('button');

    }

    async gotoSuperPhonePicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.superPhonePicture.click();
    }

    async gotoSuperPhoneTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.superPhoneTitle.click();
    }

    async gotoSuperPhoneView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.superPhoneView.click();
    }

    async gotoBexioPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.bexioPicture.click();
    }

    async gotoBexioTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.bexioTitle.click();
    }

    async gotoBexioView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.bexioView.click();
    }

    async gotoThemesKingdomPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.themesKingdomPicture.click();
    }

    async gotoThemesKingdomTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.themesKingdomTitle.click();
    }

    async gotoEl3mentPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.el3mentPicture.click();
    }

    async gotoEl3mentTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.el3mentPicture.click();
    }

    async gotoTraderFylesPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.traderFylesPictures.click();
    }

    async gotoTraderFylesTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.traderFylesTitle.click();
    }

    async gotoExportOnlinePicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.exportOnlinePicture.click();
    }

    async gotoExportOnlineTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.exportOnlineTitle.click();
    }

    async gotoNFMePicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.nFMePicture.click();
    }

    async gotoNFMeTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.nFMeTitle.click();
    }

    async gotoBizzItPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.bizzItPicture.click();
    }

    async gotoBizzItTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.bizzItTitle.click();
    }

    async gotoEveryBitePicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.everyBitePicture.click();
    }

    async gotoEveryBiteTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.everyBiteTitle.click();
    }

    async gotoLifeLogsPictures(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.lifeLogsPicture.click();
    }

    async gotoLifeLogsTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.lifeLogsTitle.click();
    }

    async gotoNovakDjokovicPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.novakDjokovicPicture.click();
    }

    async gotoNovakDjokovicTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.novakDjokovicTitle.click();
    }

    async gotoManiloPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.maniloPicture.click();
    }

    async gotoManiloTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.maniloTitle.click();
    }

    async gotoManiloView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.maniloView.click();
    }

    async gotoNagNagPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.nagNagPicture.click();
    }

    async gotoNagNagTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.nagNagTitle.click();
    }

    async gotoHeraldPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.heraldPictures.click();
    }

    async gotoHeraldTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.heraldTitle.click();
    }

    async gotoHeraldView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.heraldView.click();
    }

    async gotoKnowlePicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.knowlePicture.click();
    }

    async gotoKnowleTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.knowleTitle.click();
    }

    async gotoKnowleView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.knowleView.click();
    }

    async gotoLambertPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.lambertPicture.click();
    }

    async gotoLambertTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.lambertTitle.click();
    }

    async gotoLambertView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.lambertView.click();
    }

    async gotoShelfiePicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.shelfiePicture.click();
    }

    async gotoShelfieTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.shelfieTitle.click();
    }

    async gotoShelfieView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.shelfieView.click();
    }

    async gotoZioESPicture(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.zioESPicture.click();
    }

    async gotoZioESTitle(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.zioESTitle.click();
    }

    async gotoZioESView(){
        await this.page.goto('https://www.lambdaworks.io');
        await this.ourWorkPage.click();
        await this.zioESTitle.click();
    }















}