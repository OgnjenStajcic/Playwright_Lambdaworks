import { test, expect } from "@playwright/test";
import { Footer } from "../pages/Footer";

test.beforeEach(async ({page}) => {
    await page.goto('https://www.lambdaworks.io');
  });

test ('User is able to go to Product Innovation page from footer', async ({page}) => {
    const footer = new Footer(page);
    await footer.gotoProductInnovationFooter();
    await expect(page).toHaveURL('https://www.lambdaworks.io/product-innovation');
    await expect(page).toHaveTitle('Product Innovation • LambdaWorks');
})

test ('User is able to go to Tech Excellence page from footer', async ({page}) => {
    const footer = new Footer(page);
    await footer.gotoTechExcellenceFooter();
    await expect(page).toHaveURL('https://www.lambdaworks.io/tech-excellence');
    await expect(page).toHaveTitle('Tech Excellence • LambdaWorks');
})

test ('User is able to go to Our Work page from footer', async ({page}) => {
    const footer = new Footer(page);
    await footer.gotoOurWorkFooter();
    await expect(page).toHaveURL('https://www.lambdaworks.io/work');
    await expect(page).toHaveTitle('Our Work • LambdaWorks');
})

test ('User is able to go to Careers page from footer', async ({page}) => {
    const footer = new Footer(page);
    await footer.gotoCareersFooter();
    await expect(page).toHaveURL('https://www.lambdaworks.io/careers');
    await expect(page).toHaveTitle('Careers • LambdaWorks');
})

test ('User is able to go to Company page from footer', async ({page}) => {
    const footer = new Footer(page);
    await footer.gotoCompanyFooter();
    await expect(page).toHaveURL('https://www.lambdaworks.io/company');
    await expect(page).toHaveTitle('Company • LambdaWorks');
})

test ('User is able to go to Contact page from footer', async ({page}) => {
    const footer = new Footer(page);
    await footer.gotoContactFooter();
    await expect(page).toHaveURL('https://www.lambdaworks.io/contact');
    await expect(page).toHaveTitle('Get in Touch • LambdaWorks');
})

test ('User is able to go to Instagram page from footer', async ({page}) => {
    const footer = new Footer(page);
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        footer.gotoInstagram()
    ])
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://www.instagram.com/_lambdaworks/');
})

test ('User is able to go to Linkedln page from footer', async ({page}) => {
    const footer = new Footer(page);
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        footer.gotoLinkedln()
    ])
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://www.linkedin.com/company/lambdaworksio/');
})