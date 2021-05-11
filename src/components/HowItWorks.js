import React from "react";
import { Figure } from "react-bootstrap";
import "./MainContent.css";

export const HowItWorks = () => {
  return (
    <div className="deleteAfter">
      <Figure>
        <Figure.Image width={171} height={180} src="./assets/CarDelivery.jpg" />
        <Figure.Caption>Delivery</Figure.Caption>
      </Figure>
    </div>
  );
};

export const Contract = () => {
  return (
    <div className="deleteAfter">
      <Figure>
        <Figure.Image width={171} height={180} src="./assets/Contract.jpg" />
        <Figure.Caption>Sign</Figure.Caption>
      </Figure>
    </div>
  );
};

export const Collect = () => {
  return (
    <div className="deleteAfter">
      <Figure>
        <Figure.Image width={171} height={180} src="./assets/CarDelivery.jpg" />
        <Figure.Caption>Collect</Figure.Caption>
      </Figure>
    </div>
  );
};
