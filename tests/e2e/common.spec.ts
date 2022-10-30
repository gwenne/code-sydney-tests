import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { Common } from "../../page-objects/Common";

test.describe("Home Page", () => {
  let homePage: HomePage;
  let common: Common;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    common = new Common(page);
    await homePage.visit();
  });
  test("Verify Menus", async ({}) => {
    await common.checkMenus();
  });
});
