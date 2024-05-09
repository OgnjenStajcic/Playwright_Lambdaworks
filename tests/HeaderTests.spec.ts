import { test, expect } from '@playwright/test';
import { Header } from '../pages/header';

test('User is able to go to Our Work page', async ({page}) => {
  const header = new Header(page);
  await header.gotoOurWorkPage();
  await expect(page).toHaveURL("https://www.lambdaworks.io/work");
  await expect(page).toHaveTitle('Our Work • LambdaWorks');

})

test('User is able to go to careers page', async ({page}) => {
  const header = new Header(page);
  await header.gotoCareersPage();
  await expect(page).toHaveTitle('Careers • LambdaWorks');
  await expect(page).toHaveURL('https://www.lambdaworks.io/careers');
})

test('User is able to go to Product Innovation page', async ({page}) => {
  const header = new Header(page);
  await header.gotoProductInnovationPage();
  await expect(page).toHaveTitle('Product Innovation • LambdaWorks');
  await expect(page).toHaveURL('https://www.lambdaworks.io/product-innovation');
})

test('User is able to go to Tech Excellence page', async ({page}) => {
  const header = new Header(page);
  await header.gotoTechExcellencePage();
  await expect(page).toHaveURL('https://www.lambdaworks.io/tech-excellence');
  await expect(page).toHaveTitle('Tech Excellence • LambdaWorks');
} )

test('User is able to go to home page', async ({page}) => {
  const header = new Header(page);
  await header.gotoHomePage();
  await expect(page).toHaveURL('https://www.lambdaworks.io');
  await expect(page).toHaveTitle('LambdaWorks • A Digital Product Agency');
})
