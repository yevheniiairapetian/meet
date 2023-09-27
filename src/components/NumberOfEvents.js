const NumberOfEvents = ({setCurrentNOE}) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
    }
    return (
      <div id="number-of-events">
        <input
          type="text"
          defaultValue="32"
          placeholder="Enter number of events"
          onChange={handleInputChanged}
          data-testid="numberOfEventsInput"
        />
      </div>
    );
  };

  export default NumberOfEvents;