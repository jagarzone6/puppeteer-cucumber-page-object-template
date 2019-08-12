const { Given, When, Then } = require("cucumber");
const UsersListPage = require("../../pages/users-list.js");
const DeleteEmployeeAssertions = require("./delete-employee-assertions.js");

let deleteEmployeeAssertions;
let usersListPage;

When("deletes the employee", async function() {
  usersListPage = new UsersListPage(this.page);
  console.log(JSON.stringify(this.data.newEmployee))
  return usersListPage.clickOnDeleteEmployee(this.data.newEmployee);
});

Then("can not see the employee anymore in employees list", async function() {
  deleteEmployeeAssertions = new DeleteEmployeeAssertions(usersListPage);
  await usersListPage.driver.waitForNavigation();
  await deleteEmployeeAssertions.verifyEmployeeIsDeleted(this.newEmployee);
});
