import { test, expect } from "@playwright/test";
import { CookiesModal } from "../pages/CookiesModal";

test('User is able to dismiss cookies', async ({page}) => {
    const cookies = new CookiesModal(page);
    await cookies.dismissCookies();
    await expect(page).toHaveURL('https://www.lambdaworks.io/');
    await expect(page).toHaveTitle('LambdaWorks • A Digital Product Agency');
})

test('User is able to agree cookies by clicking on checkbox', async ({page}) => {
    const cookies = new CookiesModal(page);
    await cookies.agreeCookiesCheckbox();
    await expect(page).toHaveURL('https://www.lambdaworks.io/');
    await expect(page).toHaveTitle('LambdaWorks • A Digital Product Agency');
})

test('User is able to agree cookies by clicking on text "I agree"', async ({page}) => {
    const cookies = new CookiesModal(page);
    await cookies.agreeCookiesText();
    await expect(page).toHaveURL('https://www.lambdaworks.io/');
    await expect(page).toHaveTitle('LambdaWorks • A Digital Product Agency');
})