# Meet App
The Meet App helps users to find events held in a city of the user's choice. The users can choose a city, and number of events, and see a visualized graph of the events. The app can also be used offline and installed on mobile/desktop.

### The Use of Serverless
The app makes use of serverless technology to fetch data from the Career Foundry Google Calendar API and display events for authenticated/authorized users (with the help of the OAuth2 framework). As well it displays notifications (when the user enters incorrect data and/or is offline), processes data in real-time, and can scale on demand.

### Key Features:
- Filter Events by City.
- Show/Hide Event Details.
- Specify the Number of Events.
- Use the App When Offline (thanks to the Progressive Web Apps technology)
- Add an App Shortcut to the Home Screen (install the app on mobile/desktop) (thanks to the Progressive Web Apps technology).
- Display 2 types of charts visualizing event details (Scatter chart and Pie chart).
- Display notifications when the user enters incorrect data and/or is offline.

## Project Screenshot
[(<a href="https://ibb.co/xfB2HKk"><img src="https://i.ibb.co/SdM6rDj/2023-10-04-19h37-48.png" alt="2023-10-04-19h37-48" border="0"></a>)]   
## Project In Use Preview
_Please click on the video below to watch it_   
[![Watch the video](https://i.ibb.co/SdM6rDj/2023-10-04-19h37-48.png)](https://streamable.com/8sxcyd)

### Technologies Used:
- Google OAUTH2 Authentication/Authorization
- AWS Serverless Lambda Functions.
- Progressive Web Apps (PWAs).
- Testing (unit, integration, user acceptance, and end-to-end testing)
- Asynchronous requests/responses
- Google Calendar API
- Rechart.js
- Responsive design

### Project dependencies:
- Google OAUTH2 Authentication/Authorization
- AWS Serverless Lambda Functions for the serverless technology.
- Progressive Web Apps (PWAs) for the offline/install technologies.
- Asynchronous requests/responses
- Career Foundry Google Calendar API for the events data
- Rechart.js for interactive charts
- Github pages for deployment

### User Stories

## User Story 1
As a _user_, I would like to be able to filter the events by city so that I know what events take place in the city
## User Story 2
As a _user_, I would like to be able to show/hide event details so that I can see more/less information about that event
## User Story 3
As a _user_, I would like to be able to specify the number of events I want to view in the app so that I can see more/less events in the list
## User Story 4
As a _user_, I would like to use the app offline so that I can see the events that I viewed before
## User Story 5
As a _user_, I would like to be able to add a shortcut of the app to my home screen so that I can conveniently open it from there
## User Story 6
As a _user_, I would like to see the chart showing the future events in a city so that I know what events are being organized in the cities

### Scenarios

## SCENARIO 1
When the user hasn’t searched for a specific city, show upcoming events from all cities.

_Given_ user hasn’t searched for any city;
_When_ the user opens the app;
_Then_ the user should see a list of upcoming events.

#### SCENARIO 2
Users should see a list of suggestions when they search for a city.

_Given_ the main page is open;
_When_ user starts typing in the city textbox;
_Then_ the user should receive a list of cities (suggestions) that match what they’ve typed.

#### SCENARIO 3
Users can select a city from the suggested list.

_Given_ user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
_When_ the user selects a city (e.g., “Berlin, Germany”) from the list;
_Then_ their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

#### SCENARIO 4
Users can specify the number of events to show.

_Given_ user has chosen "Berlin" from the city suggestions list;
_When_ the user types in the number of events in the textbox;
_Then_ their view should be changed showing the list of events for the selected city below.

#### SCENARIO 5
Users can use the app offline.

_Given_ user hasn't changed the previous search queries;
_When_ the user uses the app offline;
_Then_ the app should display the results from the previous search.

#### SCENARIO 6
Users can add a shortcut of the app to the main screen.

_Given_ user has installed the application;
_When_ the user uses the app on the respective device;
_Then_ they should be able to add the app shortcut to the main screen.

#### SCENARIO 7
Users can display charts visualizing event details

_Given_ user has selected the city from the suggested list of cities;
_When_ the main page is open;
_Then_ they should be able to see the visualized charts of the upcoming events in the city.

### The app is live here: https://yevheniiairapetian.github.io/meet/

### Clone and Preview
To clone the app, use the command `console git clone git@github.com:yevheniiairapetian/meet.git` Or download directly by clicking on <> Code button > Download ZIP. Navigate to the ```meet``` folder with ```cd meet``` in the terminal, and install the required dependencies using the `npm install command`. Then run the app using the terminal command ```npm start``` and navigate to ```localhost:3000/meet``` in the browser 

### Contact:
Feel free to contact me via[ LinkedIn](https://www.linkedin.com/in/yevhenii-airapetian/) or  
[email](mailto:sonkozhenia11@gmail.com) or 
via the contact information on the [website](https://yevheniiairapetian.github.io/portfolio-website/contact.html) 
