//Imports
import React from "react";
import { CarPartComp } from "./CarPartComp";

//CarParts Class
export class CarParts extends React.Component {
  render() {
    //Using Map function to render JSON data
    return this.props.carParts.map((carParts) => {
      return (
        <CarPartComp
          carParts={carParts}
          key={carParts._id}
          Reload={this.props.Reload}
        ></CarPartComp>
      );
    });
  }
}
