const { After, Before } = require("cucumber");

Before(async function() {
  return await this.launchBrowser();
});

After(async function() {
  await this.closeBrowser();
});