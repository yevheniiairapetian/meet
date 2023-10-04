const NumberOfEvents = ({setCurrentNOE, setErrorAlert}) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    let errorText;
    if (isNaN(value) || value <= 0 || value > 32) {
      errorText = 'Please enter a valid number greater than 0 and less than 33.';
      setErrorAlert(errorText);
      setCurrentNOE(0);
    } else {
      errorText = '';
      setErrorAlert(errorText);
      setCurrentNOE(value);
    }
    }
    return (
      <div id="number-of-events">
      <label htmlFor="event-input">Number of Events<br/> 
        <input
        id="event-input"
          type="text"
          defaultValue="32"
          placeholder="Enter number of events"
          onChange={handleInputChanged}
          data-testid="numberOfEventsInput"
        />
        </label>
      </div>
    );
  };

  export default NumberOfEvents;