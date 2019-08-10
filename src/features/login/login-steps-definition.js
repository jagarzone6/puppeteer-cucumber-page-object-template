
const { Given, When, Then } = require("cucumber");
const LoginPage = require('./../../pages/login.js');
let loginPage;
  Given("Juan access the web browser in vacations management application", async function() {
    await this.goTo(this.appURL);
    loginPage = new LoginPage(this.page);
    await loginPage.verifyLoginIsVisible();
  });
  
  When("he attempts to login with his credentials", async function() {
    console.log(this.user);
    await loginPage.attemptToLogin(this.user.email,this.user.passw);
  });
  
  Then("he navigates to the dashboard", async function() {
  });