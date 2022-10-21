import React, { useState } from "react";
import "./Calenders.css";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

const Calenders = () => {
  const startCalenderStyle = {
    position: "absolute",
    top: "15%",
    left: "61%",
  };
  const endCalenderStyle = {
    position: "absolute",
    top: "15%",
    right: "10.8%",
  };

  const [displayStartCalender, setDisplayStartCalender] = useState(false);
  const [displayEndCalender, setDisplayEndCalender] = useState(false);
  const [startDate, setStartDate] = useState(new Date("01 Jan 2022"));
  const [endDate, setEndDate] = useState(new Date("01 Jan 2022"));
  const startCalenderHandler = () => {
    setDisplayStartCalender(!displayStartCalender);
    setDisplayEndCalender(false);
  };
  const endCalenderHandler = () => {
    setDisplayEndCalender(!displayEndCalender);
    setDisplayStartCalender(false);
  };
  const startDateHandler = (e) => {
    setStartDate(e.value);
  };
  const endDateHandler = (e) => {
    setEndDate(e.value);
  };
   function removeWeekday(day){
    return day.toDateString().toString().split(" ").slice(1).join(" ");
  };
  return (
    <div className="calender-container">
      <div className="calender">
        <h2>Start Date</h2>
        <h1>{removeWeekday(startDate)}</h1>
        <button className="calender-btn" onClick={startCalenderHandler}>
          🗓️
        </button>
        {displayStartCalender ? (
          <CalendarComponent
            style={startCalenderStyle}
            onChange={startDateHandler}
          />
        ) : (
          ""
        )}
      </div>
      <div className="calender">
        <h2>End Date</h2>
        <h1>{removeWeekday(endDate)}</h1>
        <button className="calender-btn" onClick={endCalenderHandler}>
          🗓️
        </button>
        {displayEndCalender ? (
          <CalendarComponent
            style={endCalenderStyle}
            onChange={endDateHandler}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export  default Calenders
// export 
