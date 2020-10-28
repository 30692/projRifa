import React, { Component } from "react";

// import { Carousel } from "react-bootstrap";
import NavBar from "../NavBar";
import Cars from "../Cars";
import "./home-page.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <Carousel id="carousel"> */}
        <div>
          <center>
            <p id="paragraph">Produtinhos!</p>
          </center>
          <hr width="50%" />
        </div>

        <Cars />
      </div>
    );
  }
}
