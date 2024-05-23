import { Page, Locator } from "@playwright/test";

export class ProductInnovationHiddenElements {
  page: Page;
  hiddenElement: Locator;

  constructor(page) {
    this.page = page;
    this.hiddenElement = page.locator(".carouselStyle__StyledCraftingContainer-sc-itrd4a-0");
  }
}
