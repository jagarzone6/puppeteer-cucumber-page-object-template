@login
Feature: Login into the application
   As a user
   I want to login in the application
   To be able to interact with the functionalities

  Scenario: Login into the app using email and password
    Given Juan access the web browser in vacations management application 
    When attempts to login with his credentials
    Then navigates to the dashboard
