import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const App = () => {
  const [eventValue, setEventValue] = useState("");
  const [startValue, setStartValue] = useState("");
  const [events, setEvents] = useState([
    {
      title: "Werk",
      start: moment(),
      end: moment(),
      allDay: false
    }
  ]);

  const addEvent = (e) => {
    const newEvents = [...events];
    newEvents.push({
      title: eventValue,
      start: startValue,
      end: moment()
    });
    setEvents(newEvents);
  };

  return (
    <div className="App">
      <div className="event-input">
        <label for="eventInput">Event:&nbsp;</label>
        <input
          id="eventInput"
          name="eventInput"
          value={eventValue}
          onChange={(e) => {
            setEventValue(e.target.value);
          }}
        />
        <label for="eventInput">Start&nbsp;</label>
        <input
          id="eventInput"
          name="eventInput"
          value={startValue}
          onChange={(e) => {
            setStartValue(e.target.value);
          }}
        />
        <button onClick={addEvent}>Add event</button>
      </div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "75vh" }}
      />
      <div className="list">
        <ul>
          <li>Display Weekly view X</li>
          <li>Highlight today X</li>
          <li>Allow navigation to different weeks X</li>
          <li>allow adding new events</li>
          <li>allow editing existing events</li>
          <li>allow deleting events</li>
          <li>Persisting data </li>
          <li>Use apis to load and save data </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
