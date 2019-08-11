const { Given, When, Then } = require("cucumber");
const LoginPage = require("./../../pages/login.js");
const LoginAssertions = require("./login-assertions.js");
const HomePage = require("./../../pages/home.js");

let loginPage;
let loginAssertions;

Given(
  "Juan access the web browser in vacations management application",
  async function() {
    await this.goTo(this.appURL);
    loginPage = new LoginPage(this.page);
    loginAssertions = new LoginAssertions(loginPage);
    return loginAssertions.verifyLoginIsVisible();
  }
);

When("attempts to login with his credentials", async function() {
  return loginPage.attemptToLogin(this.user.email, this.user.passw);
});

Then("navigates to the dashboard", async function() {
  return loginAssertions.validateHomePageAfterLogin(new HomePage(this.page));
});
