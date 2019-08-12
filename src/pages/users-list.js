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
    async clickOnDeleteEmployee(newEmployeeData) {
        return this.driver.evaluate((row,cssSelector) => {
            document.querySelectorAll(cssSelector)[row].scrollIntoView();
            document.querySelectorAll(cssSelector)[row].click();
          }, newEmployeeData.row-1,this.DELETE_LINK_CSS_SELECTOR);
    }

    async lookForEmployeeInEmployeesList(employee){
        return this.driver.evaluate((employeeLeader,cssSelector) => {
            let found = false;
            let row = 0;
            let employeeData = {};
            document.querySelectorAll(cssSelector).forEach(element => {
              if (element.children[3].textContent == employeeLeader) {
                found = true;
                employeeData.firstName = element.children[0].textContent;
                employeeData.lastName = element.children[1].textContent;
                employeeData.id = element.children[2].textContent;
                employeeData.leaderName = element.children[3].textContent;
                employeeData.dateStartedWorking = element.children[4].textContent;
              }
              if (found == false) row++;
            });
            return { found, row, employeeData };
          }, employee.leaderName,this.ROW_CSS_SELECTOR);
    }
}

module.exports= UsersListPage;