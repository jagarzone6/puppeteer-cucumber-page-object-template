const { Given, When, Then } = require("cucumber");
const HomePage = require("../../pages/home.js");
const CreateEmployeePage = require("../../pages/create-employee.js");

let homePage;
let createEmployeePage;

When("attempts to create a new employee", async function() {
  homePage = new HomePage(this.page);
  await homePage.clickOnCreateEmployee();
  createEmployeePage = new CreateEmployeePage(this.page);
  return createEmployeePage.attemptToCreateNewEmployee(this.newEmployee);
});

Then("can see the new employee in employees information", async function() {
});
