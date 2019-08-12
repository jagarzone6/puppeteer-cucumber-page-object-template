const { Given, When, Then } = require("cucumber");
const UsersListPage = require("../../pages/users-list.js");
const DeleteEmployeeAssertions = require("./delete-employee-assertions.js");

let deleteEmployeeAssertions;
let usersListPage;

When("deletes the employee", async function() {
  usersListPage = new UsersListPage(this.page);
  return usersListPage.clickOnDeleteEmployee(this.data.newEmployee);
});

Then("can not see the employee anymore in employees list", async function() {
  deleteEmployeeAssertions = new DeleteEmployeeAssertions(usersListPage);
  await usersListPage.driver.waitForNavigation();
  result = await deleteEmployeeAssertions.verifyEmployeeIsDeleted(this.newEmployee);
  console.log(JSON.stringify(result))
});
