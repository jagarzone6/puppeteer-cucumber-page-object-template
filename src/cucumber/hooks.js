const { After, Before } = require("cucumber");

Before(async function() {
  await this.launchBrowser();
});

After(async function() {
  await this.closeBrowser();
});