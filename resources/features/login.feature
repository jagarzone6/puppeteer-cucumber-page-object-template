@login
Feature: Login into the application
   Feature Description:
   As a user
   I want to login in the application
   To be able to interact with the functionalities

  Scenario: Login into the app using email and password
    Given Juan access the web browser in vacations management application 
    When he attempts to login with his credentials
    Then he navigates to the dashboard
