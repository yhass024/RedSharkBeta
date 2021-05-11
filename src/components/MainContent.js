import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MainContent.css";
import DatePicker from "./DatePicker";
import LeftBanner from "./LeftBanner";
import { HowItWorks, Contract, Collect } from "./HowItWorks";

const MainContent = () => {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [startTime, setStartTime] = React.useState();

  return (
    <div className="main">
      <Container>
        <Row className="mainContent">
          <Col xs={4} className="leftSection">
            <LeftBanner />
          </Col>
          <Col xs={7} className="mainSection">
            <div>
              <DatePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                startTime={startTime}
                setStartTime={setStartTime}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={4}>
            <HowItWorks />
          </Col>
          <Col xs={4}>
            <Contract />
          </Col>
          <Col xs={4}>
            <Collect />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainContent;
