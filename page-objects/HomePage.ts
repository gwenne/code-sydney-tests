require("dotenv").config();
import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  // Define selectors
  readonly page: Page;
  readonly membersDiv: Locator;
  readonly meetUpMembersDescLbl: Locator;
  readonly meetUpMembersCounterLbl: Locator;
  readonly meetUpMembersSpan: Locator;
  readonly meetUpMembersSpanAfter: Locator;
  readonly socMedMembersLbl: Locator;
  readonly slackMembersLbl: Locator;
  readonly awardsDiv: Locator;
  readonly awardsLbl: Locator;
  readonly award1stPlaceLbl: Locator;
  readonly awards3rdPlaceLbl: Locator;

  //Init selectors using constructor
  constructor(page: Page) {
    this.page = page;
    this.membersDiv = page
      .locator(
        'div:has-text("3000Meetup Members1000Social Media Followers600Slack Members")'
      )
      .nth(2);
    this.meetUpMembersDescLbl = page.locator(
      "#root > div > div.rn-counterup-area.pt--25.pb--110.bg_color--1 > div > div:nth-child(2) > div:nth-child(1) > p"
    );
    this.meetUpMembersCounterLbl = page.locator(
      "#root > div > div.rn-counterup-area.pt--25.pb--110.bg_color--1 > div > div:nth-child(2) > div:nth-child(1) > h5"
    );
    this.meetUpMembersSpan = page.locator(
      "#root > div > div.rn-counterup-area.pt--25.pb--110.bg_color--1 > div > div:nth-child(2) > div:nth-child(1) > h5 > span"
    );
    this.meetUpMembersSpanAfter = page.locator(
      "#root > div > div.rn-counterup-area.pt--25.pb--110.bg_color--1 > div > div:nth-child(2) > div:nth-child(1) > h5::after"
    );
    ////*[@id="root"]/div/div[2]/div/div[2]/div[1]/h5/span
    //#root > div > div.rn-counterup-area.pt--25.pb--110.bg_color--1 > div > div:nth-child(2) > div:nth-child(1) > h5 > span
    //page.getByText("3000Meetup Members");
    this.socMedMembersLbl = page.getByText("1000Social Media Followers");
    this.slackMembersLbl = page.getByText("600Slack Members");
    this.awardsDiv = page
      .locator(
        'div:has-text("Awards1st Place Winner, Hack4FI (Financial Inclusion)3rd Place Winner, Hack4Home")'
      )
      .nth(2);

    this.awardsLbl = page.getByRole("heading", { name: "Awards" });
    this.award1stPlaceLbl = page.locator(
      'a:has-text("1st Place Winner, Hack4FI (Financial Inclusion)")'
    );
    this.awards3rdPlaceLbl = page.locator(
      'a:has-text("3rd Place Winner, Hack4Homelessness")'
    );
  }

  // Define page methods
  async visit() {
    await this.page.goto("/");
    await expect(this.page).toHaveURL("/");
  }

  async checkMembers() {
    await expect(this.meetUpMembersDescLbl).toHaveText("Meetup Members");
    await expect(this.meetUpMembersCounterLbl).toHaveClass("counter");
    await expect(this.meetUpMembersSpan).not.toBeEmpty();
  }
}
