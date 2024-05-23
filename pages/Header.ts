import { Locator, Page } from "@playwright/test";

export class Header {
  page: Page;
  ourWork: Locator;
  careers: Locator;
  productInnovation: Locator;
  techExcellence: Locator;
  lambdaWorks: Locator;

  constructor(page) {
    this.page = page;
    this.ourWork = page.getByLabel("Our Work").first();
    this.careers = page.getByLabel("Careers").first();
    this.productInnovation = page.getByLabel("Product Innovation").first();
    this.techExcellence = page.getByLabel("Tech Excellence").first();
    this.lambdaWorks = page.getByLabel("home-icon", { exact: true });
  }

  async gotoOurWorkPage() {
    await this.ourWork.click();
  }

  async gotoCareersPage() {
    await this.careers.click();
  }

  async gotoProductInnovationPage() {
    await this.productInnovation.click();
  }

  async gotoTechExcellencePage() {
    await this.techExcellence.click();
  }

  async gotoHomePage() {
    await this.lambdaWorks.click();
  }
}
