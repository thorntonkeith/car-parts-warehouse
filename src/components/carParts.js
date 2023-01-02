import React from "react";
import { CarPartComp } from "./CarPartComp";

export class CarParts extends React.Component{
    render(){
        return this.props.carParts.map(
            (carParts)=>{
                return <CarPartComp carParts={carParts} key={carParts._id} Reload={this.props.Reload}></CarPartComp>
            }
        );
    }
}