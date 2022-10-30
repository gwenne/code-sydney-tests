import { expect, Locator, Page } from "@playwright/test";

export class Common {
  // Define selectors
  readonly page: Page;
  readonly homeButton: Locator;
  readonly marketPlaceButton: Locator;
  readonly askAMentorButton: Locator;
  readonly galleryButton: Locator;
  readonly merchButton: Locator;
  readonly newsletterButton: Locator;
  readonly headingLblOne: Locator;
  readonly headingLblTwo: Locator;
  readonly headingImg: Locator;

  //Init selectors using constructor
  constructor(page: Page) {
    this.page = page;
    this.homeButton = page.getByRole("link", { name: "Home" });
    this.marketPlaceButton = page.getByRole("link", { name: "Marketplace" });
    this.askAMentorButton = page.getByRole("link", { name: "Ask a mentor" });
    this.galleryButton = page.getByRole("link", { name: "Gallery" });
    this.merchButton = page.getByRole("link", { name: "Merch" });
    this.newsletterButton = page.getByRole("link", { name: "Newsletter" });
    this.headingLblOne = page.getByRole("heading", { name: "Code.Sydney" });
    this.headingLblTwo = page.getByRole("heading", {
      name: "Sydney Volunteer Programmers",
    });
    this.headingImg = page.getByRole('img', { name: 'Code.Sydney' });
  }

  // Define page methods
  async checkMenus() {
    await this.checkHome();
    await this.checkMarketPlace();
    await this.checkAskAMentor();
    await this.checkGalery();
    await this.checkMerch();
    await this.checkNewsletterButton();
  }
  async checkNewsletterButton() {
    await this.newsletterButton.click();
    await expect(this.page).toHaveURL("/newsletter");
    await this.checkHeading();
  }
  async checkMerch() {
    await this.merchButton.click();
    await expect(this.page).toHaveURL("/merch");
    await this.checkHeading();
  }
  async checkGalery() {
    await this.galleryButton.click();
    await expect(this.page).toHaveURL("/gallery");
    await this.checkHeading();
  }
  async checkAskAMentor() {
    await this.askAMentorButton.click();
    await expect(this.page).toHaveURL("/volunteers");
    await this.checkHeading();
  }
  async checkMarketPlace() {
    await this.marketPlaceButton.click();
    await expect(this.page).toHaveURL("/marketplace");
    await this.checkHeading();
  }
  async checkHome() {
    await this.homeButton.click();
    await expect(this.page).toHaveURL("/");
    await this.checkHeading();
  }
  async checkHeading() {
    await expect(this.headingLblOne).toBeVisible();
    await expect(this.headingLblTwo).toBeVisible();
    await expect(this.headingImg).toBeVisible();
    await expect(this.headingLblOne).toContainText("Code.Sydney");
    await expect(this.headingLblTwo).toContainText(
      "Sydney Volunteer Programmers"
    );
    
  }
}
