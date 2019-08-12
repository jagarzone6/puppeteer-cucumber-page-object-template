class UsersListPage {
    constructor(driver) {
        this.driver=driver;
        this.CREATE_USER_LINK = "div#site_content a[href='/employees/new']";
        this.DELETE_LINK_CSS_SELECTOR = "tr td a[data-method='delete']";
        this.ROW_CSS_SELECTOR = "tr";
    }
    async clickOnCreateEmployee() {
        await this.driver.evaluate(scrollToSelector => {
            document.querySelector(scrollToSelector).scrollIntoView();
          }, this.CREATE_USER_LINK);
        return this.driver.click(this.CREATE_USER_LINK);
    }
    async clickOnDeleteEmployee(employeeData) {
        await this.driver.evaluate(scrollToSelector => {
            document.querySelector(scrollToSelector).scrollIntoView();
          }, this.CREATE_USER_LINK);
    }
}

module.exports= UsersListPage;