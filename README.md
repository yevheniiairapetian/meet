# Meet App
The Meet App helps the users to find events held in a city of the user's choice. The users will be able to choose a city, number of events, and see a visualized graph of the events. The app can also be used offline.
### The Use of Serverless
The app will make use of the serverless techology to fetch data from the Google Calendar API and display events for the authenticated/authorized users (with the help of the OAuth2 framework). As well it will display notifications, process data in real time, recommend events and can scale on demand. 
### Key Features:
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.


### User Story 1
As a _user_, I would like to be able to filter the events by city so that I know rhat events take place in the city
### User Story 2
As a _user_, I would like to be able to show-hide event details so that I can see more information about that event
### User Story 3
As a _user_, I would like to to be able to specify the number of events I want to view in the app so that I can more or less of the events in the list
### User Story 4
As a _user_, I would like to use the app offline so that I can see the events that I viewed before
### User Story 5
As a _user_, I would like to be able to add a shortcut on the app to my homescreen so that I can conveniently open it from there
### User Story 6
As a _user_, I would like to see the chart showing the future event in a each city so that I know what events are being organized in the cities

### SCENARIO 1
When user hasn’t searched for a specific city, show upcoming events from all cities.

_Given_ user hasn’t searched for any city;
_When_ the user opens the app;
_Then_ the user should see a list of upcoming events.

### SCENARIO 2
User should see a list of suggestions when they search for a city.

_Given_ the main page is open;
_When_ user starts typing in the city textbox;
_Then_ the user should receive a list of cities (suggestions) that match what they’ve typed.

### SCENARIO 3
User can select a city from the suggested list.

_Given_ user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
_When_ the user selects a city (e.g., “Berlin, Germany”) from the list;
_Then_ their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### SCENARIO 4
User can specify the number of events to show.

_Given_ user has chosen "Berlin" from the city suggestions list;
_When_ the user types in the number of events in the textbox;
_Then_ their view should be changed showing the list of events for the selected city below.

### SCENARIO 5
User can use the app offline.

_Given_ user hasn't changed the previous search queries;
_When_ the user uses the app offline;
_Then_ their the app should display the results from the previous search.

### SCENARIO 6
User can add a shortcut of the app to the main screen.

_Given_ user has installed the application;
_When_ the user uses the app on the respective device;
_Then_ they should be able to add a app shortcut to the main screen.

### SCENARIO 7
User can display charts visualizing event details

_Given_ user has selected the city from the suggested list of cities;
_When_ the main page is open;
_Then_ they should be able to see the visualized charts of the upcoming events in the city.

### The app is live here: https://yevheniiairapetian.github.io/meet/
