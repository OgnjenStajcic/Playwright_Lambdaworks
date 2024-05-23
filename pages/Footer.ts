import { Locator, Page } from "@playwright/test";

export class Footer {
  page: Page;
  productInnovation: Locator;
  techExcellence: Locator;
  ourWork: Locator;
  careers: Locator;
  company: Locator;
  contact: Locator;
  instagram: Locator;
  linkedln: Locator;
  year: Locator;

  constructor(page) {
    this.page = page;
    this.productInnovation = page.getByRole("link", { name: "Product Innovation" }).nth(2);
    this.techExcellence = page.getByRole("link", { name: "Tech Excellence" }).nth(2);
    this.ourWork = page.getByRole("link", { name: "Our Work" }).nth(2);
    this.careers = page
      .locator("div")
      .filter({ hasText: /^CareersCompanyContact$/ })
      .getByLabel("Careers");
    this.company = page.getByRole("link", { name: "Company" });
    this.contact = page.getByRole("link", { name: "Contact" });
    this.instagram = page.getByLabel("Instagram", { exact: true });
    this.linkedln = page.getByLabel("LinkedIn", { exact: true });
  }

  async gotoProductInnovationFooter() {
    await this.productInnovation.click();
  }

  async gotoTechExcellenceFooter() {
    await this.techExcellence.click();
  }

  async gotoOurWorkFooter() {
    await this.ourWork.click();
  }

  async gotoCareersFooter() {
    await this.careers.click();
  }

  async gotoCompanyFooter() {
    await this.company.click();
  }

  async gotoContactFooter() {
    await this.contact.click();
  }

  async gotoInstagram() {
    await this.instagram.click();
  }

  async gotoLinkedln() {
    await this.linkedln.click();
  }
}
