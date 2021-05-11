import React from "react";
import { Figure } from "react-bootstrap";
import "./MainContent.css";

const LeftBanner = () => {
  return (
    <div>
      <div>
        <Figure>
          <Figure.Image
            width={600}
            height={180}
            alt="171x180"
            src="./assets/GMCYukon.webp"
          />
          <Figure.Caption className="leftBannerText"></Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default LeftBanner;
