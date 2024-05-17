import { Locator, Page } from "@playwright/test";
import { Header } from "./Header";

export class OurWorkProjects {
  page: Page;
  header: Header;
  superPhonePicture: Locator;
  bexioTitle: Locator;
  themesKingdomPicture: Locator;
  el3mentTitle: Locator;
  traderFylesPictures: Locator;
  exportOnlineTitle: Locator;
  nFMeTitle: Locator;
  bizzItTitle: Locator;
  everyBiteTitle: Locator;
  lifeLogsPicture: Locator;
  novakDjokovicTitle: Locator;
  maniloView: Locator;
  nagNagPicture: Locator;
  heraldView: Locator;
  knowleView: Locator;
  lambertPicture: Locator;
  lambertView: Locator;
  shelfieView: Locator;
  zioESView: Locator;

  constructor(page) {
    this.page = page;
    this.header = new Header(page);
    this.superPhonePicture = page.locator(".workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a").first();
    this.bexioTitle = page.getByRole("link", { name: "bexio" });
    this.themesKingdomPicture = page.locator(
      "div:nth-child(6) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a"
    );
    this.el3mentTitle = page.getByRole("link", { name: "el3ment" });
    this.traderFylesPictures = page.locator(
      "div:nth-child(8) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a"
    );
    this.exportOnlineTitle = page.getByRole("link", { name: "ExportOnline" });
    this.nFMeTitle = page.getByRole("link", { name: "NF.Me" });
    this.bizzItTitle = page.getByRole("link", { name: "BizzIt" });
    this.lifeLogsPicture = page.locator(
      "div:nth-child(13) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a"
    );
    this.everyBiteTitle = page.getByRole("link", { name: "EveryBite" });
    this.novakDjokovicTitle = page.getByRole("link", { name: "Novak Djokovic Foundation" });
    this.maniloView = page
      .locator("div")
      .filter({ hasText: /^Viewproject2020MANILOWeb developmentView Project$/ })
      .getByRole("button");
    this.nagNagPicture = page.locator(
      "div:nth-child(16) > div > div > .workStyle__StyledArchiveItemContainer-sc-fy2cs4-0 > a"
    );
    this.heraldView = page
      .locator("div")
      .filter({ hasText: /^Viewproject2023HeraldInfrastructure,Mobile development,LW productView Project$/ })
      .getByRole("button");
    this.knowleView = page
      .locator("div")
      .filter({ hasText: /^Viewproject2023KnowleOpen sourceView Project$/ })
      .getByRole("button");
    this.lambertPicture = page
      .locator("div")
      .filter({ hasText: /^Viewproject2021LambertLW product,InfrastructureView Project$/ })
      .getByRole("link")
      .first();
    this.lambertView = page
      .locator("div")
      .filter({ hasText: /^Viewproject2021LambertLW product,InfrastructureView Project$/ })
      .getByRole("button");
    this.shelfieView = page
      .locator("div")
      .filter({ hasText: /^Viewproject2023ShelfieWeb development,LW product,InfrastructureView Project$/ })
      .getByRole("button");
    this.zioESView = page
      .locator("div")
      .filter({ hasText: /^Viewproject2023ZIO ESOpen sourceView Project$/ })
      .getByRole("button");
  }

  async gotoSuperPhonePicture() {
    await this.header.ourWork.click();
    await this.superPhonePicture.click();
  }

  async gotoBexioTitle() {
    await this.header.ourWork.click();
    await this.bexioTitle.click();
  }

  async gotoThemesKingdomPicture() {
    await this.header.ourWork.click();
    await this.themesKingdomPicture.click();
  }

  async gotoEl3mentTitle() {
    await this.header.ourWork.click();
    await this.el3mentTitle.click();
  }

  async gotoTraderFylesPicture() {
    await this.header.ourWork.click();
    await this.traderFylesPictures.click();
  }

  async gotoExportOnlineTitle() {
    await this.header.ourWork.click();
    await this.exportOnlineTitle.click();
  }

  async gotoNFMeTitle() {
    await this.header.ourWork.click();
    await this.nFMeTitle.click();
  }

  async gotoBizzItTitle() {
    await this.header.ourWork.click();
    await this.bizzItTitle.click();
  }

  async gotoEveryBiteTitle() {
    await this.header.ourWork.click();
    await this.everyBiteTitle.click();
  }

  async gotoLifeLogsPictures() {
    await this.header.ourWork.click();
    await this.lifeLogsPicture.click();
  }

  async gotoNovakDjokovicTitle() {
    await this.header.ourWork.click();
    await this.novakDjokovicTitle.click();
  }

  async gotoManiloView() {
    await this.header.ourWork.click();
    await this.maniloView.click();
  }

  async gotoNagNagPicture() {
    await this.header.ourWork.click();
    await this.nagNagPicture.click();
  }

  async gotoHeraldView() {
    await this.header.ourWork.click();
    await this.heraldView.click();
  }

  async gotoKnowleView() {
    await this.header.ourWork.click();
    await this.knowleView.click();
  }

  async gotoLambertPicture() {
    await this.header.ourWork.click();
    await this.lambertPicture.click();
  }

  async gotoShelfieView() {
    await this.header.ourWork.click();
    await this.shelfieView.click();
  }

  async gotoZioESView() {
    await this.header.ourWork.click();
    await this.zioESView.click();
  }
}
