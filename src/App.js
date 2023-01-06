//Imports
import React, { Component } from "react";
import "./App.css";
import { Home } from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Add } from "./components/add";
import { Browse } from "./components/browse";
import { Modify } from "./components/modify";
import spark_plug_s from "./assets/spark_plug_s.png"


//App Component
class App extends Component {
  render() {
    return (
      //Routing
      <Router>
        <div className="container ">
          {/*Navbar*/}
          <div className="navigation rounded-5">
          <Navbar className="rounded" bg="danger" variant="dark">
            {/*Navbar Links*/}
            <Container className="container ">
            <Navbar.Brand href="/"><img src={spark_plug_s} />Car Parts Warehouse</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/add">Add</Nav.Link>
                <Nav.Link href="/browse">Browse</Nav.Link>
                <Nav.Link href="/modify">Modify</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </div>
          <br />
          {/*Paths for component routes*/}
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/add" element={<Add></Add>} />
            <Route path="/browse" element={<Browse></Browse>} />
            <Route path="/modify/:id" element={<Modify></Modify>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
