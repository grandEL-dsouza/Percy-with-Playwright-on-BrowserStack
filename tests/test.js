require("dotenv").config({ path: ".env.local" });

import { test } from "@playwright/test";
const { percySnapshot } = require("@percy/playwright"); // <-- Correct function
const fs = require('fs');

// Read and parse the JSON file
const data = JSON.parse(fs.readFileSync('urls.json', 'utf8'));

// Loop through URLs
for (const url of data.urls) {
  test(`Review the page - ${url.url}`, async ({ page }) => {
    console.log(`Running test for URL: ${url.url}`);
    await page.goto(url.url);

    try {
      await percySnapshot(page, `Snapshot of ${url.url}`, { fullPage: true });  // <-- Correct function
      console.log(`Percy snapshot taken for ${url.url}`);
    } catch (error) {
      console.error(`Failed to take Percy snapshot for ${url.url}:`, error);
    }
  });
}
