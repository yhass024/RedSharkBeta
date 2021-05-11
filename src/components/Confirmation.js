import React, { useContext } from "react";
import { CarContext } from "./CarContext";
import { DetailsContext } from "./DetailsContext";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./Confirmation.css";
// import emailjs from "emailjs-com";

export const Confirmation = () => {
  const { address, address2, startDate, endDate, startTime } = useContext(
    CarContext
  );

  return startDate ? (
    <div>
      <Card style={{ width: "39rem" }} className="confirmationCard">
        <Card.Body className="deets">
          <Card.Title className="rentalDeets">Rental Details</Card.Title>
          <p className="dateTime">Dates and Times:</p>
          <Card.Text className="bold">
            Start Date: {startDate.format("MM/DD/YYYY")} @ {startTime / 3600}
          </Card.Text>
          <Card.Text className="bold">
            End Date: {endDate.format("MM/DD/YYYY")} @ {startTime / 3600}
          </Card.Text>
          <p className="bold">Delivery Address:</p>
          <Card.Text>{address}</Card.Text>
          <p className="bold">Pick-up Address:</p>
          <Card.Text>{address2}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ) : null;
};

export const Confirmation2 = () => {
  const { firstName, lastName, email, phone } = useContext(DetailsContext);

  return (
    <div>
      <Card className="clientDetails">
        <Card.Body>
          <h5 className="client">Your Information:</h5>
          <p className="clientCard">{firstName}</p>
          <p className="clientCard">{lastName}</p>
          <p className="clientCard">{email}</p>
          <p className="clientCard">{phone}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

const Reservation = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
            <Confirmation2 />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Confirmation />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card className="email">
              <Card.Body className="emailContent">
                You will be emailed the rental details and confirmation number
                after clicking confirm.
              </Card.Body>
            </Card>
            <Button
              style={{ margin: "10px" }}
              variant="danger"
              // onSubmit={sendEmail}
            >
              Confirm2
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservation;
