let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

class LoginAssertions {
    constructor(loginPage) {
        this.loginPage=loginPage;
        this.assert = chai.assert;

    }
    async verifyLoginIsVisible() {
        return Promise.all([
            this.assert.isFulfilled(this.loginPage.driver.waitForSelector(this.loginPage.EMAIL_INPUT,{visible:true})),
            this.assert.isFulfilled(this.loginPage.driver.waitForSelector(this.loginPage.PASS_INPUT,{visible:true})),
            this.assert.isFulfilled(this.loginPage.driver.waitForSelector(this.loginPage.SUBMIT_BUTTON,{visible:true}))
        ]);
    }

    async validateHomePageAfterLogin(homePage) {
        return Promise.all([
            this.assert.isFulfilled(homePage.driver.waitForSelector(homePage.LOGGED_BANNER,{visible:true})),
            this.assert.isFulfilled(homePage.driver.waitForSelector(homePage.LOGO,{visible:true})),
            this.assert.isFulfilled(homePage.driver.waitForSelector(homePage.USER_LOGGED_SPAN,{visible:true}))
        ]);
    }
}

module.exports= LoginAssertions;