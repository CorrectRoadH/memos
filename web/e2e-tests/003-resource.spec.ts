import { test, expect } from "@playwright/test";
import { review, login, writeMemo } from "./utils";

test.use({
  locale: "en-US",
  timezoneId: "Europe/Berlin",
});

test.beforeEach(async ({ page }) => {
  await login(page, "admin", "admin");
});

test.describe("Upload Resource", async () => {
  test("upload resource", async ({ page }) => {
    // change setting to local storage
    // open setting
    // set Storage to loacl
    // save
    //upload a resource by memos editor
  });
});
