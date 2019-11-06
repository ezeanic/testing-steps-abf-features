Ability: Creating Email Directly, individual scenarios

Scenario: Creating An Email that should be defined
  Given I am interested in creating a Simple Email
  When I create an Email
  Then it should be defined

Scenario: Throw an Invalid Email if @ is not present
  Given I am interested in creating a Simple Email
  When Throw if email does not have @
  Then Invalid Email should be thrown

Scenario: Throw an Invalid Email if a dot(.) is not present
  Given I am interested in creating a Simple Email
  When Throw if email does not have .
  Then Invalid Email should be thrown

Scenario: Throw an Invalid Email if username is not present
  Given I am interested in creating a Simple Email
  When Throw if email does not have username
  Then Invalid Email should be thrown

Scenario: Throw an Invalid Email if a domain name is not present
  Given I am interested in creating a Simple Email
  When Throw if email does not have domain name
  Then Invalid Email should be thrown

