class HomePage {
    constructor(driver) {
        this.driver=driver;
        this.LOGGED_BANNER = "div#site_content p[class='flash_notice']";
        this.LOGO = "div#logo_text img[alt='GAP Vacations Management']";
        this.USER_LOGGED_SPAN = 'div#menubar ul#user_information span';
        this.USER_LOGGED_SIGN_OUT_LINK = "div#menubar ul#user_information span a[data-method='delete']";
        this.CREATE_USER_LINK = "div#site_content a[href='/employees/new']";
    }
    async clickOnCreateEmployee() {
        await this.driver.evaluate(scrollToSelector => {
            document.querySelector(scrollToSelector).scrollIntoView();
          }, this.CREATE_USER_LINK);
        return this.driver.click(this.CREATE_USER_LINK);
    }
}

module.exports= HomePage;