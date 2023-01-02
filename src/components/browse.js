import React from "react";
import { CarParts } from "./carParts";
import axios from "axios";

export class Browse extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:4000/api/car_parts')
            .then((response) => {
                this.setState({ car_parts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        car_parts: []
    }

    render() {
        return (
            <div>
                <h3>Browse component!</h3>
                <CarParts carPart={this.state.carPart} Reload={this.componentDidMount}></CarParts>
            </div>
        );
    }
}