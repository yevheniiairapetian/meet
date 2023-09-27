Feature: Specify number of displayed events

  Scenario: Default number is 32 when not specified.
    Given the user has not specified or filtered any number,
    When the user sees the list,
    Then the default number of displayed events should be 32.

  Scenario: Change the number of events displayed.
    Given the user has events displayed,
    When the user chooses to change the number of events displayed,
    Then the number of events displayed should update to the selected number.