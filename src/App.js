import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import { v4 as uuidV4 } from "uuid";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
let allViews = Object.keys(Views).map((k) => Views[k]);

const localizer = momentLocalizer(moment);
const App = () => {
  const [editEvent, setEditEvent] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [events, setEvents] = useState([
    {
      id: uuidV4(),
      title: "Finish Calendar",
      start: moment(),
      end: moment(),
      allDay: false
    }
  ]);

  const addEvent = (e) => {
    if (editEvent) {
      setEvents((events) =>
        events.map((event) =>
          event.id === editEvent.id
            ? {
                ...event,
                title: eventTitle,
                start: eventStart,
                end: eventStart
              }
            : event
        )
      );
      setEditEvent(null);
    } else {
      setEvents((events) => [
        ...events,
        {
          id: uuidV4(),
          title: eventTitle,
          start: moment().date(eventStart),
          end: moment().date(eventStart)
        }
      ]);
    }
    setEventTitle("");
    setEventStart("");
  };

  const selectEventHandler = (event, e) => setEditEvent(event);

  const cancelEditMode = () => setEditEvent(null);

  useEffect(() => {
    if (editEvent) {
      setEventTitle(editEvent.title);
      setEventStart(editEvent.start);
    }
  }, [editEvent]);

  useEffect(() => {
    console.log("events", events);
  }, [events]);

  const startOfMonth = moment().startOf("month").format("DD");

  return (
    <div className="App">
      <div className="text-center">
        <div className="event-input">
          <label>
            Event:
            <input
              id="eventInput"
              name="eventInput"
              onChange={(e) => {
                setEventTitle(e.target.value);
              }}
              value={eventTitle}
            />
          </label>
          <br />
          <label>
            Start:
            <input
              id="startInput"
              name="startInput"
              onChange={(e) => {
                setEventStart(
                  parseInt(startOfMonth) + parseInt(e.target.value) - 1
                );
              }}
              value={eventStart}
            />
          </label>
          <br />
          <button type="button" onClick={addEvent}>
            {editEvent ? "Edit" : "Add"} event
          </button>
          {editEvent && (
            <button type="button" onClick={cancelEditMode}>
              Cancel
            </button>
          )}
        </div>
      </div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        views={allViews}
        events={events}
        style={{ height: "65vh" }}
        onSelectEvent={selectEventHandler}
      />
      <div className="row">
        <div className="list col-sm-6">
          <ul>
            <li>Display Weekly view (X)</li>
            <li>Highlight today (X)</li>
            <li>Allow navigation to different weeks (X)</li>
            <li>allow adding new events (X)</li>
            <li>allow editing existing events (X)</li>
            <li>allow deleting events (X) </li>
            <li>Persisting data (ran out of time)</li>
            <li>Use apis to load and save data (ran out of time)</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};
export default App 