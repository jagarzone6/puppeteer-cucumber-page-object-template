let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

class CreateEmployeeAssertions {
  constructor(usersListPage) {
    this.usersListPage = usersListPage;
    this.assert = chai.assert;
  }
  async verifyEmployeeIsCreated(employee) {
    let response = await this.usersListPage.lookForEmployeeInEmployeesList(employee);
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
