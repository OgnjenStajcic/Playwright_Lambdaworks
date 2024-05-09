import { test, expect } from "@playwright/test";
import { TechExcellence} from "../pages/TechExcellence";

test('User is able to go to Tech Radar page', async ({page}) => {
    const tech = new TechExcellence(page);
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        tech.gotoTechRadar()
    ])
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://lambdaworks.github.io/tech-radar/');
    await expect(newTab).toHaveTitle('LambdaWorks Tech Radar');
})

test('User is able to see carousel1 content', async ({page}) => {
    const tech = new TechExcellence(page);
    await tech.carousel1Click();
    await expect(tech.bexio).toBeVisible();
})

test('User is able to see carousel2 content', async ({page}) => {
    const tech = new TechExcellence(page);
    await tech.carousel2Click();
    await expect(tech.novakDjokovicFoundation).toBeVisible();
})

test('User is able to see carousel3 content', async ({page}) => {
    const tech = new TechExcellence(page);
    await tech.carousel3Click();
    await expect(tech.manilo).toBeVisible();
})

test('User is able to go to contact page through Tech Excellence page', async ({page}) => {
    const tech = new TechExcellence(page);
    await tech.gotoContactPage();
    await expect(page).toHaveURL('https://www.lambdaworks.io/contact');
    await expect(page).toHaveTitle('Get in Touch • LambdaWorks');
})
