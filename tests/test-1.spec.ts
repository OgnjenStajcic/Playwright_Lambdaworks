import { test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { ourWork } from '../pages/ourWork';
import { careers } from '../pages/careers';

test('clickOnPages', async ({page}) => {
  const click = new homePage(page);

  await click.gotoOurWorkPage;
  await click.gotoCareersPage;
})

test('gotoOurWorkPage', async ({page}) => {
  const click = new ourWork(page);

  await click.gotoSuperPhonePage;
})

test('gotoBexioPage', async ({page}) => {
  const click = new ourWork(page);

  await click.gotoBexioPage;
})

test('gotoLinkedlnAccount', async ({page}) => {
  const click = new careers(page);

  await click.gotoLinkedlnAccount;
})