Feature: Show/Hide Event Details

  Scenario: Collapse event details by default.
    Given the user opens the app
    When the user receives a full list of events
    Then all events should be collapsed by default

  Scenario: Expand an event to see details.
    Given the user gets a list of events,
    When the user selects an event's details,
    Then the details of the chosen event will be displayed.

  Scenario: Collapse an event to hide details.
    Given the user sees event details,
    When the user presses a button to hide event details,
    Then the details of that event will be hidden.