import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      },
     {
        title: 'string',
        start: moment().toDate(),
        end: moment()
        .add(3, "days")
        .toDate(),
        allDay: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <button className="text-center">Add event</button>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
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
     </ul></div>
      </div>
    );
  }
}

export default App;
