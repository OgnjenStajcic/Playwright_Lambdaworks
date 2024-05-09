import { test, expect } from "@playwright/test";
import { GetInTouch } from "../pages/GetInTouch";

test ('User is able to go to Contact page', async ({page}) => {
    const contact = new GetInTouch(page);
    await contact.gotoContactForm();
    await expect(page).toHaveURL('https://www.lambdaworks.io/contact');
    await expect(page).toHaveTitle('Get in Touch • LambdaWorks');
})