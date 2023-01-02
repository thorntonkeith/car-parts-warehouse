import React from "react";
import { CarPartComp } from "./CarPartComp";

export class CarParts extends React.Component{
    render(){
        return this.props.carParts.map(
            (carPart)=>{
                return <CarPartComp carPart={carPart} key={carPart._id} Reload={this.props.Reload}></CarPartComp>
            }
        );
    }
}