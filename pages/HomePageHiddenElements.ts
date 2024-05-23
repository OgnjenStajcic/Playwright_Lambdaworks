import { Page, Locator } from "@playwright/test";

export class HomePageHiddenElements {
  page: Page;
  awesome: Locator;
  projectList: Locator;
  projectPicture: Locator;
  animation1: Locator;
  animation2: Locator;
  leftHalf: Locator;
  rightHalf: Locator;

  constructor(page) {
    this.page = page;
    this.rightHalf = page.getByText("of 8Read all our reviews on Clutch");
    this.leftHalf = page.getByText("Click+DragLambdaWorks has");
    this.projectList = page.locator(".clientListStyle__StyledClientList-sc-et9qtx-5");
    this.projectPicture = page.getByRole("link", { name: "Case studies" });
    this.animation1 = page.locator("#reachPotentialVector");
    this.animation2 = page.locator("#sparkYourInnovationVector");
    this.awesome = page.getByText("awesome");
  }
}
