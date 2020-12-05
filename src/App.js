import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const App = () => {
  const [events, setEvents] = useState([
    {
      title: "Werk",
      start: moment().toDate(),
      end: moment(),
      allDay: false,
    },
  ]);

  return (
    <div className="App">
      <form>
        <input
          placeholder="Name"
          onChange={(e) =>
            setEvents([{ ...events, title: e.target.value }, console.log(events.title)])
          }
          required
        ></input>
        
      </form>
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
