import { Locator, Page } from "@playwright/test";

export class TechExcellenceHiddenElements {
  page: Page;
  hiddenElement: Locator;

  constructor(page) {
    this.page = page;
    this.hiddenElement = page.locator(".carouselStyle__StyledCraftingContainer-sc-itrd4a-0");
  }
}
