let chai = require("chai");
let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

class DeleteEmployeeAssertions {
  constructor(usersListPage) {
    this.usersListPage = usersListPage;
    this.assert = chai.assert;
  }

  async verifyEmployeeIsDeleted(employee) {
    let response = await this.usersListPage.lookForEmployeeInEmployeesList(employee);
    await this.assert.eventually.equal(Promise.resolve(response.found), false);
    return Promise.resolve(response);
  }
}

module.exports = DeleteEmployeeAssertions;
