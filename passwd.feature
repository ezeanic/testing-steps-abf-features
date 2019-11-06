Ability: Creating Passwords


Scenario: password should have a character
    Given I want to create a password
    When I create a password
    Then It should throw

Scenario: password should have a number
    Given I want to create a password
    When I create a password
    Then It should throw

Scenario: password should have a small letter
    Given I want to create a password
    When I create a password
    Then It should throw

Scenario: password should have a capital letter
    Given I want to create a password
    When I create a password
    Then It should throw
    
Scenario: password should have a length greater than 6
    Given I want to create a password
    When I create a password
    Then It should throw





# Examples:
#     |   pass     | should_throw |
#     |   Chi122   | should       |
#     |   chi12*   | should       |
#     |   C9i+er   | shouldn't    |
#     |   Chi122   | should       |
#     |   CCK1+*   | should       |
#     |   Chi122   | should       |
#     |   NDnn11   | should       |
#     |   nnn22L   | should       |
#     |   ()+22L   | should       |
#     |   Chi32)   | shouldn't    |
