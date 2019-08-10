class LoginPage {
    constructor(page) {
        this.page=page;
        this.EMAIL_INPUT = "input#user_email";
        this.PASS_INPUT = "input#user_password";
        this.SUBMIT_BUTTON = 'input.submit';
    }
    async verifyLoginIsVisible() {
        await this.page.waitForSelector(this.EMAIL_INPUT,{visible:true});
        await this.page.waitForSelector(this.PASS_INPUT,{visible:true});
        return await this.page.waitForSelector(this.SUBMIT_BUTTON,{visible:true});
    }

    async attemptToLogin(email,pass) {
        await this.page.type(this.EMAIL_INPUT, email);
        await this.page.type(this.PASS_INPUT, pass);
        return Promise.all([
            this.page.waitForNavigation(),
            this.page.click(this.SUBMIT_BUTTON),
          ]);
    }
}

module.exports= LoginPage;