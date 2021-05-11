import React, { useContext, useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Button, Jumbotron, Container } from "react-bootstrap";
import "./MainContent.css";
import TimePicker from "react-bootstrap-time-picker";
import { Link } from "react-router-dom";
import { CarContext } from "./CarContext";

const DatePicker = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    startTime,
    setStartTime,
  } = useContext(CarContext);
  const [focusedInput, setFocusedInput] = useState();

  const availability = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div>
        <Jumbotron className="jumboMain">
          <Container>
            <h1 className="jumbo">Welcome to RedShark</h1>
            <p className="jumbo2">
              {`No more waiting in line or having to be picked up, we will deliver and pick-up your rental for FREE :)`}
            </p>
          </Container>
        </Jumbotron>
      </div>
      <h3 className="reserve">Make A Reservation</h3>
      <form>
        <div className="date">
          <DateRangePicker
            startDate={startDate}
            startDateId="start-date"
            endDate={endDate}
            endDateId="end-date"
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            required={true}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <p>Please Select Delivery & Pick-up Time</p>
          <div className="time">
            <TimePicker
              start="8:00"
              end="18:00"
              step={60}
              value={startTime}
              onChange={(value) => {
                setStartTime(value);
              }}
            />
          </div>
          {
            <Link to="/carSelect">
              <Button
                variant="danger"
                type="submit"
                style={{ margin: "10px" }}
                onClick={availability()}
              >
                CHECK AVAILABILITY
              </Button>
            </Link>
          }
        </div>
      </form>
    </div>
  );
};

export default DatePicker;
