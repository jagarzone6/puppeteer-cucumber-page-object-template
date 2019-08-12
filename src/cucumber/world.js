var { setWorldConstructor } = require("cucumber");
const puppeteer = require("puppeteer");
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(25 * 1000);
var config = require('./../../resources/config.json')[process.env.ENV || 'default'];
const utils = require('./../util/utils.js')

class World {
  constructor() {
    this.driver = puppeteer;
    this.browser = null;
    this.page = null;
    this.appURL = config.appURL;
    this.user = config.user;
    this.newEmployee = config.newEmployee;
    this.utils = utils;
    this.data = {};
  }
  async launchBrowser() {
    this.browser = await this.driver.launch({ headless: false,
      args: [`--window-size=1466,868`]
     });
     this.page = await this.browser.newPage();
     await this.page.setViewport({
       width: 1366,
       height: 768
     });
  }
  async goTo(page) {
    await this.page.goto(page);
  }

  async closeBrowser() {
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(World);
