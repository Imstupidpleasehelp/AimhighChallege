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
        title: "Werk",
        start: moment().toDate(),
        end: moment(),

        allDay: false,
      },
    ],
  };
  myChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <form>
          <div className="text-center col-sm-12">
            <input placeholder="start date" required></input>
            <input placeholder="end date" required></input>
            <input
              placeholder="Title"
              onChange={this.myChangeHandler}
              required
            ></input>{" "}
            <br /> <button className="text-center">Add event</button>
          </div>
        </form>
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
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
