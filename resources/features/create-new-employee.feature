@new_employee
Feature: Create a new employee
   As a user
   I want to create a new user
   To be able to manage his vacations

  Scenario: Create new user
    Given Juan access the web browser in vacations management application 
    And attempts to login with his credentials
    When attempts to create a new employee
    Then can see the new employee in employees information
