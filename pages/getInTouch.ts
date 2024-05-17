import { Locator, Page } from "@playwright/test";

export class GetInTouch {
  page: Page;
  getInTouch: Locator;

  constructor(page) {
    this.page = page;
    this.getInTouch = page.locator("a").filter({ hasText: "Get in touch" });
  }

  async gotoContactForm() {
    await this.getInTouch.click();
  }
}
