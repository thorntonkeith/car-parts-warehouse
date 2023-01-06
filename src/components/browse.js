//Imports
import React from "react";
import { CarParts } from "./carParts";
import axios from "axios";

//Browse class
export class Browse extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  //Using Axios to retrieve data from database
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/car_parts")
      .then((response) => {
        this.setState({ carParts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  state = {
    carParts: [],
  };

  render() {
    return (
      <div>
        <h3 style={{textAlignVertical: "center",textAlign: "center"}}>Browse Parts</h3>
        {/* Displaying data from database */}
        <CarParts
          carParts={this.state.carParts}
          Reload={this.componentDidMount}
        ></CarParts>
      </div>
    );
  }
}
