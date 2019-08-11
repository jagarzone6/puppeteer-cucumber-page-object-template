class LoginPage {
    constructor(driver) {
        this.driver=driver;
        this.EMAIL_INPUT = "input#user_email";
        this.PASS_INPUT = "input#user_password";
        this.SUBMIT_BUTTON = 'input.submit';
    }
    async attemptToLogin(email,pass) {
        await this.driver.type(this.EMAIL_INPUT, email);
        await this.driver.type(this.PASS_INPUT, pass);
        return Promise.all([
            this.driver.waitForNavigation(),
            this.driver.click(this.SUBMIT_BUTTON),
          ]);
    }
}

module.exports= LoginPage;