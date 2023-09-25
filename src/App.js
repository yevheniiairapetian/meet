import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import {extractLocations, getEvents} from '../src/api';
import { useState, useEffect } from "react";
import './App.css';

const App = () => {
  
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  useEffect(() => {
    fetchData();
  }, [currentCity]);
  
  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }
  return (
    <div className="App">
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}></CitySearch>
      <NumberOfEvents></NumberOfEvents>
      <EventList events={events}></EventList>
    </div>
  );
};



export default App;