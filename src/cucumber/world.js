var { setWorldConstructor } = require("cucumber");
const puppeteer = require("puppeteer");
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(25 * 1000);
var config = require('./../../resources/config.json')[process.env.ENV || 'default'];

class World {
  constructor() {
    this.driver = puppeteer;
    this.browser = null;
    this.page = null;
    this.appURL = config.appURL;
    this.user = config.user;
  }
  async launchBrowser() {
    this.browser = await this.driver.launch({ headless: false });
  }
  async goTo(page) {
    this.page = await this.browser.newPage();
    await this.page.goto(page);
  }

  async closeBrowser() {
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(World);
