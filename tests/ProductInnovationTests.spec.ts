import { test, expect } from "@playwright/test";
import { ProductInnovation } from "../pages/ProductInnovation";

test('User is able to see carousel 1', async ({page}) => {
    const product = new ProductInnovation(page);
    await product.seeCarousel1();
    await expect(product.el3ment).toBeVisible();
})

test('User is able to see carousel 2', async ({page}) => {
    const product = new ProductInnovation(page);
    await product.seeCarousel2();
    await expect(product.superPhone).toBeVisible();
})

test('User is able to see carousel 3', async ({page}) => {
    const product = new ProductInnovation(page);
    await product.seeCarousel3();
    await expect(product.themesKingdom).toBeVisible();
})

test('User is able to see carousel 4', async ({page}) => {
    const product = new ProductInnovation(page);
    await product.seeCarousel4();
    await expect(product.lifeLogs).toBeVisible();
})

test('User is able to go to contact form page', async ({page}) => {
    const product = new ProductInnovation(page);
    await product.gotoContactForm();
    await expect(page).toHaveURL('https://www.lambdaworks.io/contact');
    await expect(page).toHaveTitle('Get in Touch • LambdaWorks');
})