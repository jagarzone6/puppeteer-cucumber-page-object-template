class LoginAssertions {
    constructor(loginPage) {
        this.loginPage=loginPage;
    }
    async verifyLoginIsVisible() {
        return await Promise.all([
            this.loginPage.driver.waitForSelector(this.loginPage.EMAIL_INPUT,{visible:true}),
            this.loginPage.driver.waitForSelector(this.loginPage.PASS_INPUT,{visible:true}),
            this.loginPage.driver.waitForSelector(this.loginPage.SUBMIT_BUTTON,{visible:true})
        ]);
    }

    async validateHomePageAfterLogin(homePage) {
        return await Promise.all([
            homePage.driver.waitForSelector(homePage.LOGGED_BANNER,{visible:true}),
            homePage.driver.waitForSelector(homePage.LOGO,{visible:true}),
            homePage.driver.waitForSelector(homePage.USER_LOGGED_SPAN,{visible:true})
        ]);
    }
}

module.exports= LoginAssertions;