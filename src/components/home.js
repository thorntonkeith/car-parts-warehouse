//Imports
import React, { Component } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Carousel from "react-bootstrap/Carousel";

//Home Component
export class Home extends Component {
  render() {
    return (
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >

        <div className="cara container" >
        
       <h1 style={{textAlignVertical: "center",textAlign: "center"}}>Car Parts Management System</h1>
       <hr className="dashed mt-5"></hr>
       <p className="p-3 display-6">Welcome to the car parts management system. <b>This system is strictly for employees only</b>. This system allows employess to add/delete or modify stock in the company car part database.</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://hpemotorsport.co.uk/wp-content/uploads/2017/05/sportClutch2.jpg"
              />
            </Carousel.Item>
           
          </Carousel>
        </div>
      </ThemeProvider>
    );
  }
}
