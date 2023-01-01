//Imports
import React from "react";
import Card from 'react-bootstrap/Card';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class CarPartCmpts extends React.Component {
    constructor(){
        super();
        this.DeletePart = this.DeletePart.bind(this);
    }
    DeletePart(event){
        event.preventDefault();

        axios.delete('http://localhost:4000/api/carPart/'+this.props.carPart.id)
        .then((response)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.carPart.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.carPart.image}></img>
                            <footer >
                                {this.props.carPart.make}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/modify/' + this.props.carPart.id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeletePart}>Delete</Button>
                </Card>
            </div>
        );
    }
}