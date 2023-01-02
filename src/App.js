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


//App Component
class App extends Component {
  render() {
    return (
      //Routing
      <Router>
        <div className="Main">
          {/*Navbar*/}
          <Navbar bg="danger" variant="dark">
            {/*Navbar Links*/}
            <Container>
            <Navbar.Brand href="/">Car Parts Warehouse</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/add">Add</Nav.Link>
                <Nav.Link href="/browse">Browse</Nav.Link>
                <Nav.Link href="/modify">Modify</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
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
