import React, { useState } from "react";
import Calendar from "react-calendar";
import "./event.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import "react-calendar/dist/Calendar.css";

function Event() {
  const [date, setDate] = React.useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");

  const saveEvents = (event) => {
    event.preventDefault();
    console.log(eventName);
    if (eventName.trim() !== "") {
      setEvents([...events, { date: date.toDateString(), name: eventName }]);
      setEventName("");
    }
  };

  const handleDateChange = (value) => {
    setDate(value);
  };

  const inputChange = (event) => {
    setEventName(event.target.value);
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };
  
  const tileClassName = ({ date, view }) => {
    if (view === "month" && (date.getDay() === 0 || date.getDay() === 6)) {
      return "weekend-tile";
    }
    if (date.toDateString() === new Date().toDateString()) {
      return "current-date";
    }
    return "";
  };

  return (
    <div className="container-fluid flex justify-center items-center h-screen">

      <div className="row w-full max-w-5xl">

        <div className="col-md-8 ">
          <div className="card-body border-sky-500">
            <Calendar
              onChange={handleDateChange}
              value={date}
              tileClassName={tileClassName}
              calendarType="gregory"
              className="w-full"
            />
          </div>
        </div>
        
        <div className="col-md-4 bg-white shadow-lg rounded-lg p-4 ">
          <form className="mb-3" id="eventForm" onSubmit={saveEvents}>
            <div id="selectDate">

            <h2 className="text-2xl font-bold mb-2" >{date.toDateString()}</h2>
            </div>
            <input
              type="text"
              id="eventInput"
              className="form-control mb-2  border-gray-300 rounded p-2 w-full"
              placeholder="Add Your Event"
              value={eventName}
              onChange={inputChange}
            />
            <button type="submit" className="px-4 py-1 text-sm mb-3 text-purple-600 font-semibold rounded-full border  border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Save</button>
          </form>
          <div className="eventListing" id="eventlisting">
            <h2 className="text-xl font-bold mb-2">Events</h2>
            <ul className="list-group">
              {events.map((event, index) => (
                <li key={index} className="list-group-item flex justify-between items-center" id="listevent">
                  {event.date}: {event.name}
                  <i className="fa-solid fa-trash cursor-pointer text-red-500 ml-4" onClick={()=>deleteEvent(index)} ></i>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Event;
