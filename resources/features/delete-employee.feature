@delete_employee
Feature: Delete an employee
   As a user
   I want to delete a employee
   To be able to clean the employees list

  Scenario: Delete an employee
    Given Juan access the web browser in vacations management application 
    And attempts to login with his credentials
    And attempts to create a new employee
    And can see the new employee in employees information
    When deletes the employee
    Then can not see the employee anymore in employees list
