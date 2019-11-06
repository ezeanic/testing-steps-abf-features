Feature: Using Addresses

  Scenario Outline: Use data to create address objects
    Given I wish to create an address
    When I try to create and address with a <streetAddress>, <city>, <state>, and <zip>
    Then I expect an exception <should_throw> be thrown

    Examples: 
      | streetAddress   | city           | state | zip     | should_throw |
      | 203 N Whatever  | Indianapolis   | IN    | 49586   | shouldn't    |
      |                 | Indianapolis   | IN    | 49586   | should       |
      | 203 N Whatever  |                | IN    | 49586   | should       |
      | 203 N Whatever  | Indianapolis   |       | 49586   | should       |
      | 203 N Whatever  | Indianapolis   | IN    |         | should       |
      | 203 N Whatever  | Indianapolis   | IN    | 49586.4 | should       |
      | 203 N Whatever  | Indianapolis   | IN    | 345     | should       |
      | 203 N Whatever  | Indianapolis   | IN    | 9348495 | should       |
      | 203 N Whatever  | Indianapolis   | IN    | 934.5   | should       |
