import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import { v4 as uuidV4 } from "uuid";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
let allViews = Object.keys(Views).map((k) => Views[k]);

const localizer = momentLocalizer(moment);
const App = () => {
  const [eventValue, setEventValue] = useState("");
  const [startValue, setStartValue] = useState("");
  const [events, setEvents] = useState([
    {
      id: uuidV4(),
      title: "Finish Calendar",
      start: moment(),
      end: moment(),
      allDay: false,
    },
  ]);

  const addEvent = (e) => {
    const newEvents = [...events];
    newEvents.push({
      title: eventValue,
      start: moment().date(startValue),
      end: moment().date(startValue),
    });
   
    setEvents(newEvents);
  };
 
  const startOfMonth = moment().startOf("month").format("DD");

  return (
    <div className="App">
      <div className="text-center">
        <div className="event-input">
          <label for="eventInput">Event:</label>
          <input
            id="eventInput"
            name="eventInput"
            onChange={(e) => {
              setEventValue(e.target.value);
            }}
          />
          <br />
          <label for="eventInput">Start:</label>
          <input
            id="startInput"
            name="startInput"
            onChange={(e) => {
              setStartValue(
                parseInt(startOfMonth) + parseInt(e.target.value) - 1
              );
            }}
          />
          <br />
          <button onClick={addEvent}>Add event</button>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        views={allViews}
        events={events}
        onSelectEvent={(event, e) => console.log('Selected event', event)}
        style={{ height: "65vh" }}
      />
      <div className="row">
        <div className="list col-sm-6">
          <ul>
            <li>Display Weekly view (X)</li>
            <li>Highlight today (X)</li>
            <li>Allow navigation to different weeks (X)</li>
            <li>allow adding new events (X)</li>
            <li>allow editing existing events</li>
            <li>allow deleting events </li>
            <li>Persisting data (ran out of time)</li>
            <li>Use apis to load and save data (ran out of time)</li>
          </ul>
        </div>
        <div className="col-sm-6">
        
          
        </div>
      </div>
    </div>
  );
};

export default App;
