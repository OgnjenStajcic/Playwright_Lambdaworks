import { test, expect } from '@playwright/test';
import { Header } from '../pages/header';

test('User is able to screenshot our workpage', async ({page}) => {
    const projects = new Header(page);
    await projects.gotoOurWorkPage();
    await expect(page).toHaveScreenshot();
})