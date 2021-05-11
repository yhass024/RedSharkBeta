import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import PlacesAutocomplete from "react-places-autocomplete";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./carSelectPage.css";
import { CarContext } from "./CarContext";
import { DetailsContext } from "./DetailsContext";
import { ClassDetailsContext } from "./ClassDetailsContext";

const CarSelectRight = () => {
  const { address, setAddress, address2, setAddress2 } = useContext(CarContext);
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
  } = useContext(DetailsContext);
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
  // const { size, setSize, model, setModel, make, setMake } = useContext(
  //   ClassDetailsContext
  // );

  const history = useHistory();

  const handleSelect = (value) => {
    setAddress(value);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const handleSelect2 = (value) => {
    setAddress2(value);
  };

  const validateForm = () => {
    const formValue = document.forms["myForm"].value;
    if (formValue === "" || formValue === null) {
      alert("Please fill all fields");
      return false;
    }
    history.push("/confirmation");
  };

  return (
    <div>
      <div className="delivery">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <p className="vehClass">{`${size}: ${make} ${model} or similar`}</p>
              <p>YOUR INFORMATION</p>
              <input
                {...getInputProps({ placeholder: "Delivery Address" })}
              ></input>
              <div>
                {loading ? <div>Loading...</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <div className="collection">
        <PlacesAutocomplete
          value={address2}
          onChange={setAddress2}
          onSelect={handleSelect2}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({ placeholder: "Pick-up Address" })}
              ></input>

              <div>
                {loading ? <div>Loading...</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>

      <Form onSubmit={validateForm} name="myForm">
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            {/*firstName}*/}
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={firstName}
              type="text"
              required={true}
              placeholder="First Name"
              onChange={firstNameHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2"></Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={lastNameHandler}
              required={true}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2"></Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={emailHandler}
              required={true}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2"></Form.Label>
          <Col sm="10" onChange={phoneHandler}>
            <Form.Control type="number" placeholder="Phone (optional)" />
          </Col>
        </Form.Group>
        <Button type="submit" variant="danger" style={{ margin: "5px" }}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default CarSelectRight;
