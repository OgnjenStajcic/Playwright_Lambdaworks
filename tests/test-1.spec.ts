import { test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { ourWork } from '../pages/ourWork';
import { careers } from '../pages/careers';
import { getInTouch } from '../pages/getInTouch';

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

test('getInTouch', async ({page}) => {
  const click = new getInTouch(page);

  await click.assertInputField;
})

test('acceptCookies', async ({page}) => {
  const click = new homePage(page);

  await click.acceptCookies;
})