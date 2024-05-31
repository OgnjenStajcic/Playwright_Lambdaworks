import { test, expect } from "@playwright/test";
import { OurWorkProjects } from "../pages/OurWorkProjects";

test('User is able to go to SuperPhone project page by clicking on picture', async ({page}) => {
     const projects = new OurWorkProjects(page);
     await projects.gotoSuperPhonePicture();
     await expect(page).toHaveURL('https://www.lambdaworks.io/projects/superphone');
     await expect(page).toHaveTitle('Technology Partner SuperPhone • LambdaWorks');
})

test('User is able to go to SuperPhone project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoSuperPhoneTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/superphone');
    await expect(page).toHaveTitle('Technology Partner SuperPhone • LambdaWorks');
})

test('User is able to go to SuperPhone project page by clicking on view project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoSuperPhoneView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/superphone');
    await expect(page).toHaveTitle('Technology Partner SuperPhone • LambdaWorks');
})

test('User is able to go to bexio project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoBexioPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/bexio');
    await expect(page).toHaveTitle('Technology Partner bexio • LambdaWorks');
})

test('User is able to go to bexio project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoBexioPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/bexio');
    await expect(page).toHaveTitle('Technology Partner bexio • LambdaWorks');
})

test('User is able to go to bexio project page by clicking on view project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoBexioView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/bexio');
    await expect(page).toHaveTitle('Technology Partner bexio • LambdaWorks');
})

test('User is able to go to ThemesKingdom project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoThemesKingdomPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/themeskingdom');
    await expect(page).toHaveTitle('Technology Partner ThemesKingdom • LambdaWorks');
})

test('User is able to go to ThemesKingdom project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoThemesKingdomTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/themeskingdom');
    await expect(page).toHaveTitle('Technology Partner ThemesKingdom • LambdaWorks');
})

test('User is able to go to el3ment project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoEl3mentPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/el3ment');
    await expect(page).toHaveTitle('Technology Partner el3ment • LambdaWorks');
})

test('User is able to go to el3ment project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoEl3mentTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/el3ment');
    await expect(page).toHaveTitle('Technology Partner el3ment • LambdaWorks');
})

test('User is able to go to TraderFyles project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoTraderFylesPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/trader-fyles');
    await expect(page).toHaveTitle('Product development TraderFyles • LambdaWorks');
})

test('User is able to go to TraderFyles project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoTraderFylesTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/trader-fyles');
    await expect(page).toHaveTitle('Product development TraderFyles • LambdaWorks');
})

test('User is able to go to ExportOnline project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoExportOnlinePicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/export-online');
    await expect(page).toHaveTitle('Product development ExportOnline • LambdaWorks');
})

test('User is able to go to ExportOnline project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoExportOnlineTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/export-online');
    await expect(page).toHaveTitle('Product development ExportOnline • LambdaWorks');
})

test('User is able to go to Nf.Me project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoNFMePicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/nfme');
    await expect(page).toHaveTitle('Product development NF.Me • LambdaWorks');
})

test('User is able to go to Nf.Me project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoNFMeTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/nfme');
    await expect(page).toHaveTitle('Product development NF.Me • LambdaWorks');
})

test('User is able to go to BizzIt project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoBizzItPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/bizzit');
    await expect(page).toHaveTitle('Product Development Bizzit • LambdaWorks');
})

test('User is able to go to BizzIt project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoBizzItTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/bizzit');
    await expect(page).toHaveTitle('Product Development Bizzit • LambdaWorks');
})

test('User is able to go to EveryBite project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoEveryBitePicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/everybite');
    await expect(page).toHaveTitle('Technology Partner EveryBite • LambdaWorks');
})

test('User is able to go to EveryBite project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoEveryBiteTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/everybite');
    await expect(page).toHaveTitle('Technology Partner EveryBite • LambdaWorks');
})

test('User is able to go to LifeLogs project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoLifeLogsPictures();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/lifelogs');
    await expect(page).toHaveTitle('Product Development LifeLogs • LambdaWorks');
})

test('User is able to go to LifeLogs project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoLifeLogsTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/lifelogs');
    await expect(page).toHaveTitle('Product Development LifeLogs • LambdaWorks');
})

test('User is able to go to Novak Djokovic Foundation project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoNovakDjokovicPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/novak-djokovic-foundation');
    await expect(page).toHaveTitle('Technology Consulting Novak Djokovic Foundation • LambdaWorks');
})

test('User is able to go to Novak Djokovic Foundation project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoNovakDjokovicTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/novak-djokovic-foundation');
    await expect(page).toHaveTitle('Technology Consulting Novak Djokovic Foundation • LambdaWorks');
})

test('User is able to go to Manilo project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoManiloPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/manilo');
    await expect(page).toHaveTitle('e-commerce development Manilo • LambdaWorks');
})

test('User is able to go to Manilo project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoManiloTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/manilo');
    await expect(page).toHaveTitle('e-commerce development Manilo • LambdaWorks');
})

test('User is able to go to Manilo project page by clicking on view project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoManiloView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/manilo');
    await expect(page).toHaveTitle('e-commerce development Manilo • LambdaWorks');
})

test('User is able to go to NagNag project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoNagNagPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/nagnag');
    await expect(page).toHaveTitle('Product development NagNag • LambdaWorks');
})

test('User is able to go to NagNag project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoNagNagTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/nagnag');
    await expect(page).toHaveTitle('Product development NagNag • LambdaWorks');
})

test('User is able to go to Herald project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoHeraldPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/herald');
    await expect(page).toHaveTitle('Product development Herald • LambdaWorks');
})

test('User is able to go to Herald project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoHeraldTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/herald');
    await expect(page).toHaveTitle('Product development Herald • LambdaWorks');
})

test('User is able to go to Herald project page by clicking on view project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoHeraldView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/herald');
    await expect(page).toHaveTitle('Product development Herald • LambdaWorks');
})

test('User is able to go to Knowle project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoKnowlePicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/knowle');
    await expect(page).toHaveTitle('Product development Knowle • LambdaWorks');
})

test('User is able to go to Knowle project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoKnowleTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/knowle');
    await expect(page).toHaveTitle('Product development Knowle • LambdaWorks');
})

test('User is able to go to Knowle project page by clicking on view project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoKnowleView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/knowle');
    await expect(page).toHaveTitle('Product development Knowle • LambdaWorks');
})

test('User is able to go to Lambert project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoLambertPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/lambert');
    await expect(page).toHaveTitle('Product development Lambert • LambdaWorks');
})

test('User is able to go to Lambert project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoLambertTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/lambert');
    await expect(page).toHaveTitle('Product development Lambert • LambdaWorks');
})

test('User is able to go to Lambert project page by clicking on project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoLambertView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/lambert');
    await expect(page).toHaveTitle('Product development Lambert • LambdaWorks');
})

test('User is able to go to Shelfie project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoShelfiePicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/shelfie');
    await expect(page).toHaveTitle('Product development Shelfie • LambdaWorks');
})

test('User is able to go to Shelfie project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoShelfieTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/shelfie');
    await expect(page).toHaveTitle('Product development Shelfie • LambdaWorks');
})

test('User is able to go to Shelfie project page by clicking on view project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoShelfieView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/shelfie');
    await expect(page).toHaveTitle('Product development Shelfie • LambdaWorks');   
})

test('User is able to go to Zio ES project page by clicking on picture', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoZioESPicture();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/zioes');
    await expect(page).toHaveTitle('Product development ZIOes • LambdaWorks');
})

test('User is able to go to Zio ES project page by clicking on title', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoZioESTitle();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/zioes');
    await expect(page).toHaveTitle('Product development ZIOes • LambdaWorks');
})

test('User is able to go to Zio ES project page by clicking on view project', async ({page}) => {
    const projects = new OurWorkProjects(page);
    await projects.gotoZioESView();
    await expect(page).toHaveURL('https://www.lambdaworks.io/projects/zioes');
    await expect(page).toHaveTitle('Product development ZIOes • LambdaWorks');
})

