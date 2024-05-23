import { Locator, Page } from "@playwright/test";
import { Header } from "./Header";

export class OurWorkFilters {
  page: Page;
  mobileDevelopment: Locator;
  exportOnlineTitle: Locator;
  traderFylesTitle: Locator;
  superPhoneTitle: Locator;
  themesKingdomTitle: Locator;
  bexioTitle: Locator;
  el3mentTitle: Locator;
  webDevelopment: Locator;
  bexio: Locator;
  businessAnalytics: Locator;
  AI: Locator;
  infrastructure: Locator;
  productDiscovery: Locator;
  web3: Locator;
  lwProduct: Locator;
  openSource: Locator;
  dataEngineering: Locator;
  clearFilters: Locator;
  nFMeTitle: Locator;
  bizzItTitle: Locator;
  novakDjokovicTitle: Locator;
  maniloTitle: Locator;
  nagNagTitle: Locator;
  heraldTitle: Locator;
  lambertTitle: Locator;
  shelfieTitle: Locator;
  zioESTitle: Locator;
  everyBiteTitle: Locator;
  lifeLogsTitle: Locator;
  knowleTitle: Locator;

  header: Header;

  constructor(page) {
    this.page = page;
    this.header = new Header(page);
    this.themesKingdomTitle = page.getByRole("link", { name: "ThemesKingdom" });
    this.traderFylesTitle = page.getByRole("link", { name: "TraderFyles" });
    this.exportOnlineTitle = page.getByRole("link", { name: "ExportOnline" });
    this.nFMeTitle = page.getByRole("link", { name: "NF.Me" });
    this.bizzItTitle = page.getByRole("link", { name: "BizzIt" });
    this.everyBiteTitle = page.getByRole("link", { name: "EveryBite" });
    this.novakDjokovicTitle = page.getByRole("link", { name: "Novak Djokovic Foundation" });
    this.maniloTitle = page.getByRole("link", { name: "MANILO" });
    this.nagNagTitle = page.getByRole("link", { name: "NagNag" });
    this.heraldTitle = page.getByRole("link", { name: "Herald" });
    this.lambertTitle = page.getByRole("link", { name: "Lambert" });
    this.shelfieTitle = page.getByRole("link", { name: "Shelfie" });
    this.zioESTitle = page.getByRole("link", { name: "ZIO ES" });
    this.mobileDevelopment = page.getByText("Mobile development", { exact: true });
    this.superPhoneTitle = page.getByRole("link", { name: "SuperPhone" });
    this.el3mentTitle = page.getByRole("link", { name: "el3ment" });
    this.webDevelopment = page.locator("span").filter({ hasText: "Web development" });
    this.bexio = page.getByRole("link", { name: "View project", exact: true });
    this.businessAnalytics = page.getByText("Business analytics", { exact: true });
    this.AI = page.locator("div").filter({ hasText: /^AI$/ }).first();
    this.infrastructure = page.locator("span").filter({ hasText: "Infrastructure" });
    this.productDiscovery = page.locator("span").filter({ hasText: "Product discovery" });
    this.web3 = page
      .locator("div")
      .filter({ hasText: /^Web3$/ })
      .first();
    this.lwProduct = page
      .locator("div")
      .filter({ hasText: /^LW product$/ })
      .first();
    this.openSource = page.locator("div:nth-child(9)").first();
    this.dataEngineering = page.locator("span").filter({ hasText: "Data engineering" });
    this.clearFilters = page.getByText("Clear all filters");
    this.lifeLogsTitle = page.getByRole("link", { name: "LifeLogs" });
    this.bexioTitle = page.getByRole("link", { name: "bexio" });
    this.knowleTitle = page.getByRole("link", { name: "Knowle" });
  }

  async mobileDevelopmentFilter() {
    await this.header.ourWork.click();
    await this.mobileDevelopment.click();
  }

  async clearMobileDevelopmentFilter() {
    await this.header.ourWork.click();
    await this.mobileDevelopment.click();
    await this.mobileDevelopment.click();
  }

  async webDevelopmentFilter() {
    await this.header.ourWork.click();
    await this.webDevelopment.click();
  }

  async clearWebDevelopmentFilter() {
    await this.header.ourWork.click();
    await this.webDevelopment.click();
    await this.webDevelopment.click();
  }

  async buisnessAnalyticsFilter() {
    await this.header.ourWork.click();
    await this.businessAnalytics.click();
  }

  async clearBuisnessAnalyticsFilter() {
    await this.header.ourWork.click();
    await this.businessAnalytics.click();
    await this.businessAnalytics.click();
  }

  async AIFilter() {
    await this.header.ourWork.click();
    await this.AI.click();
  }

  async clearAIFilter() {
    await this.header.ourWork.click();
    await this.AI.click();
    await this.AI.click();
  }

  async infrastructureFilter() {
    await this.header.ourWork.click();
    await this.infrastructure.click();
  }

  async clearInfrastructureFilter() {
    await this.header.ourWork.click();
    await this.infrastructure.click();
    await this.infrastructure.click();
  }

  async productDisoveryFilter() {
    await this.header.ourWork.click();
    await this.productDiscovery.click();
  }

  async clearProductDisoveryFilter() {
    await this.header.ourWork.click();
    await this.productDiscovery.click();
    await this.productDiscovery.click();
  }

  async web3Filter() {
    await this.header.ourWork.click();
    await this.web3.click();
  }

  async clearWeb3Filter() {
    await this.header.ourWork.click();
    await this.web3.click();
    await this.web3.click();
  }

  async lwProductFilter() {
    await this.header.ourWork.click();
    await this.lwProduct.click();
  }

  async clearLwProductFilter() {
    await this.header.ourWork.click();
    await this.lwProduct.click();
    await this.lwProduct.click();
  }

  async openSourceFilter() {
    await this.header.ourWork.click();
    await this.openSource.click();
  }

  async clearOpenSourceFilter() {
    await this.header.ourWork.click();
    await this.openSource.click();
    await this.openSource.click();
  }

  async dataEngineeringFilter() {
    await this.header.ourWork.click();
    await this.dataEngineering.click();
  }

  async clearDataEngineeringFilter() {
    await this.header.ourWork.click();
    await this.dataEngineering.click();
    await this.dataEngineering.click();
  }

  async clearAllFilters() {
    await this.header.ourWork.click();
    await this.AI.click();
    await this.lwProduct.click();
    await this.clearFilters.click();
  }
}
