import React from "react";
import { Navbar } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Navbar className="nav">
        <Link to="/">
          <Navbar.Brand>
            <span>
              <img
                alt=""
                src="./assets/RedShark1.jpg"
                width="82"
                height="82"
                className="d-inline-block align-top"
              />
            </span>

            <span className="navFont">
              {` RedShark `}
              <i className="navFont2">{`Rent-A-Car`}</i>
            </span>
          </Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
}
