import { Locator, Page } from "@playwright/test";

export class Header {
  page: Page;
  ourWork: Locator;
  careers: Locator;
  productInnovation: Locator;
  techExcellence: Locator;
  lambdaWorks: Locator;
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
