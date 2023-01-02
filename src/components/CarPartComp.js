//Imports
import React from "react";
import Card from 'react-bootstrap/Card';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class CarPartComp extends React.Component {
    constructor(){
        super();
        this.DeletePart = this.DeletePart.bind(this);
    }
    DeletePart(event){
        event.preventDefault();

        axios.delete('http://localhost:4000/api/car_parts/'+this.props.carParts._id)
        .then((response)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.carParts.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.carParts.image}></img>
                            <footer >
                                {this.props.carParts.make}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/modify/' + this.props.carParts._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeletePart}>Delete</Button>
                </Card>
            </div>
        );
    }
}