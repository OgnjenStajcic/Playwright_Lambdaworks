import { test, expect } from '@playwright/test';
import { Header } from '../pages/header';

test('User is able to screenshot home page', async ({page}) => {
    const projects = new Header(page);
    await projects.gotoHomePage();
    await expect(page).toHaveScreenshot();
})