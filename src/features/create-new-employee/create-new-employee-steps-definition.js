const { Given, When, Then } = require("cucumber");
const UsersListPage = require("../../pages/users-list.js");
const CreateEmployeePage = require("../../pages/create-employee.js");
const CreateEmployeeAssertions = require("./create-new-employee-assertions.js");

let createEmployeePage;
let createEmployeeAssertions;
let usersListPage;

When("attempts to create a new employee", async function() {
  usersListPage = new UsersListPage(this.page);
  await usersListPage.clickOnCreateEmployee();
  createEmployeePage = new CreateEmployeePage(this.page);
  this.newEmployee.leaderName=this.newEmployee.leaderName+ this.utils.rand(1,100000);
  console.log("LEADER NAME: " + this.newEmployee.leaderName);
  return createEmployeePage.attemptToCreateNewEmployee(this.newEmployee);
});

Then("can see the new employee in employees information", async function() {
  await this.goTo("https://vacations-management.herokuapp.com/employees");
  createEmployeeAssertions = new CreateEmployeeAssertions(usersListPage);
  this.data.newEmployee = await createEmployeeAssertions.verifyEmployeeIsCreated(this.newEmployee);
  console.log(JSON.stringify(this.data.newEmployee))

});
