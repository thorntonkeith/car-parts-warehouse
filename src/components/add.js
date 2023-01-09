//imports
import React from "react";
import axios from "axios";

//Add Class
export class Add extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePartName = this.onChangePartName.bind(this);
    this.onChangePartImage = this.onChangePartImage.bind(this);
    this.onChangePartMake = this.onChangePartMake.bind(this);
    this.onChangePartPartNo = this.onChangePartPartNo.bind(this);

    this.state = {
      name: "",
      image: "",
      make: "",
      partNo: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(`Clicked button 
        ${this.state.name},
        ${this.state.image},
        ${this.state.make},
        ${this.state.partNo}`);

    const carParts = {
      name: this.state.name,
      image: this.state.image,
      make: this.state.make,
      partNo: this.state.partNo,
    };

    axios.post("http://localhost:4000/api/car_parts", carParts).then().catch();

    this.setState({
      name: "",
      image: "",
      make: "",
      partNo: "",
    });
  }

  //Functions to handle data input by user
  onChangePartName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  onChangePartImage(event) {
    this.setState({
      image: event.target.value,
    });
  }
  onChangePartMake(event) {
    this.setState({
      make: event.target.value,
    });
  }
  onChangePartPartNo(event) {
    this.setState({
      partNo: event.target.value,
    });
  }

  render() {
    return (
      //HTML Form using above functions to add data
      <div>
        <h3>Add Part</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Part Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangePartName}
            />
          </div>

          <div className="form-group">
            <label>Add Part Image: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.image}
              onChange={this.onChangePartImage}
            />
          </div>

          <div className="form-group">
            <label>Add Part Make: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.make}
              onChange={this.onChangePartMake}
            />
          </div>

          <div className="form-group">
            <label>Add Part Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.partNo}
              onChange={this.onChangePartPartNo}
            />
          </div>

          <input type="submit" value="Add Part" />
        </form>
      </div>
    );
  }
}
