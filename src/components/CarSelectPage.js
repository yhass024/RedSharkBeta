import React, { useState, useEffect, useContext } from "react";
import firebase from "./firebase";
// import carList from "../data/carList";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "./carSelectPage.css";
import CarSelectRight from "./CarSelectRight";
import { ClassDetailsContext } from "./ClassDetailsContext";

const CarSelectPage = ({ setShowForm }) => {
  const {
    cars,
    setCars,
    size,
    setSize,
    make,
    setMake,
    model,
    setModel,
  } = useContext(ClassDetailsContext);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("RedShark_Cars");

  const selectHandler = (car) => {
    setSize(car.class);
    setMake(car.make);
    setModel(car.model);
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  //Real Time Update
  /*function getCars() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCars(items);
      setLoading(false);
    });
  }*/

  function getCars2() {
    setLoading(true);
    setTimeout(() => {
      ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setCars(items);
        setLoading(false);
      });
    }, 1500);
  }

  useEffect(() => {
    getCars2();
  }, []);

  if (loading) {
    return (
      <div>
        <p className="retrieving">Retrieving Cars</p>
        <Spinner animation="border" variant="danger" />
      </div>
    );
  } else {
    return (
      // <div>
      //   <h1>List of Cars</h1>
      //   {cars.map((car) => {
      //     return (
      //       <div key={car.id}>
      //         <h2>{car.Class}</h2>
      //         <p>{car.make}</p>
      //         <p>{car.Model}</p>
      //         <p>{car.Year}</p>
      //       </div>
      //     );
      //   })}
      // </div>

      <div>
        {cars.map((e) => {
          return (
            <div className="carsGrid">
              {loading ? (
                <div>
                  <p>Retrieving Cars...</p>
                  <Spinner animation="border" variant="danger" />
                </div>
              ) : (
                <Card>
                  <div className="carsGridPic"></div>
                  <Card.Img variant="top" src={e.img} />
                  <Card.Body>
                    <Card.Title className="class">{`${e.class} class`}</Card.Title>
                    <Card.Text>{`$${e.price} per day`}</Card.Text>
                    <Card.Text>{`${e.mileage} KILOMETRES`}</Card.Text>
                    <Card.Text
                      style={{ fontSize: "12px" }}
                    >{`${e.make} ${e.model} or similar`}</Card.Text>

                    <Button variant="danger" onClick={() => selectHandler(e)}>
                      SELECT
                    </Button>
                  </Card.Body>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    );
  }
};
const CarSelectGrid = () => {
  const [showForm, setShowForm] = useState(false);

  // Move the CarSelectGrid in a separate component
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <CarSelectPage setShowForm={setShowForm} />
          </Col>
          <Col xs={6}>{showForm ? <CarSelectRight /> : null}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarSelectGrid;
