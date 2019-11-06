Feature: Using People

Scenario: Create a defined name in Person
    Given Create a person class with a defined name
    When  Name is not empty
    Then  Name in the person class should be defined

Scenario: Throw a name if left blank
    Given a person is created
    When  Created name is blank
    Then Empty name should be thrown