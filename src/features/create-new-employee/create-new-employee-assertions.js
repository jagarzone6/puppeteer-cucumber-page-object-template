let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

class CreateEmployeeAssertions {
  constructor(usersListPage) {
    this.usersListPage = usersListPage;
    this.assert = chai.assert;
  }
  async verifyEmployeeIsCreated(employee) {
    let response = await this.usersListPage.driver.evaluate((employeeLeader,cssSelector) => {
      let found = false;
      let row = 1;
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
    }, employee.leaderName,this.usersListPage.ROW_CSS_SELECTOR);
    await this.assert.eventually.equal(Promise.resolve(response.found), true);
    await this.assert.eventually.equal(
      Promise.resolve(response.employeeData.firstName),
      employee.firstName
    );
    await this.assert.eventually.equal(
      Promise.resolve(response.employeeData.lastName),
      employee.lastName
    );
    await this.assert.eventually.equal(
      Promise.resolve(response.employeeData.id),
      employee.id
    );
    await this.assert.eventually.equal(
      Promise.resolve(response.employeeData.leaderName),
      employee.leaderName
    );
    await this.assert.eventually.equal(
      Promise.resolve(response.employeeData.dateStartedWorking),
      employee.month + "/" + employee.day + "/" + employee.year
    );
    return Promise.resolve(response);
  }
}

module.exports = CreateEmployeeAssertions;
