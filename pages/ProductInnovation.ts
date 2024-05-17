import { Locator, Page } from "@playwright/test";
import { Header } from "./Header";

export class ProductInnovation {
  page: Page;
  header: Header;
  carousel1: Locator;
  el3ment: Locator;
  carousel2: Locator;
  superPhone: Locator;
  carousel3: Locator;
  themesKingdomText: Locator;
  carousel4: Locator;
  lifeLogs: Locator;
  letsTalk: Locator;

  constructor(page) {
    this.page = page;
    this.header = new Header(page);
    this.carousel1 = page.getByRole("button", { name: "01" });
    this.el3ment = page.getByRole("button", { name: "el3ment" });
    this.carousel2 = page.getByRole("button", { name: "02" });
    this.superPhone = page.getByRole("button", { name: "SuperPhone" });
    this.carousel3 = page.getByRole("button", { name: "03" });
    this.themesKingdomText = page.getByText(
      "Developing complex applications Conceptualizing the architecture and finding"
    );
    this.carousel4 = page.getByRole("button", { name: "04" });
    this.lifeLogs = page.getByRole("button", { name: "LifeLogs" });
    this.letsTalk = page.getByRole("button", { name: "Let's talk" });
  }

  async seeCarousel1() {
    await this.header.productInnovation.click();
    await this.carousel1.click();
  }

  async seeCarousel2() {
    await this.header.productInnovation.click();
    await this.carousel2.click();
  }

  async seeCarousel3() {
    await this.header.productInnovation.click();
    await this.carousel3.click();
  }

  async seeCarousel4() {
    await this.header.productInnovation.click();
    await this.carousel4.click();
  }

  async gotoContactForm() {
    await this.header.productInnovation.click();
    await this.letsTalk.click();
  }
}
