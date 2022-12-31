import React, { Component } from 'react';
import './App.css';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="Main">
      <Navbar bg="danger" variant="dark">
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      </Navbar>
      <br />
      <Routes>
      <Route path='/' element={<Home></Home>}/>
      </Routes>
      </div>
      </Router>
      );
      }
    }

export default App;
