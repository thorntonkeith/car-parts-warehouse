//Imports
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

//CarPartComp Component
export class CarPartComp extends React.Component {
  //Using Constructor and Axios to  delete car part data based on its id
  constructor() {
    super();
    this.DeletePart = this.DeletePart.bind(this);
  }
  DeletePart(event) {
    event.preventDefault();

    axios
      .delete("http://localhost:4000/api/car_parts/" + this.props.carParts._id)
      .then((response) => {
        this.props.Reload();
      })
      .catch();
  }
  render() {
    return (
      <div>
        {/* Bootstrap card displaying each individual car part */}
        <Card className="container" style={{textAlignVertical: "center",textAlign: "center"}}>
          <Card.Header>{this.props.carParts.name}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img
                src={this.props.carParts.image}
                class="rounded mx-auto d-block"
                width="300"
                height="200"
                alt="part img"
              ></img>
              <footer>{this.props.carParts.make}</footer>
              <footer>{this.props.carParts.partNo}</footer>
            </blockquote>
          </Card.Body>
          {/* React Router Dom link used to edit car part */}
          <Link
            to={"/modify/" + this.props.carParts._id}
            className="btn btn-primary"
          >
            Edit
          </Link>
          {/* Delete button */}
          <Button
            
            variant="danger "
            onClick={this.DeletePart}
          >
            Delete Part
          </Button>
        </Card>
      </div>
    );
  }
}
