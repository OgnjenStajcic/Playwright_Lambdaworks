import { test, expect } from '@playwright/test';
import { Header } from '../pages/header';

test('User is able to screenshot careers page', async ({page}) => {
    const projects = new Header(page);
    await projects.gotoCareersPage();
    await expect(page).toHaveScreenshot();
})