//import './App.css';
import React from 'react';
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stream from "./components/streamRender.js";

//import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

//import Card from 'react-bootstrap/Card';


function App() {
    return (
      
      <div className="App">
        <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Relu.io</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/link">Link</Nav.Link>
            </Nav>
  
          </Navbar.Collapse>
        </Navbar>
        </header>
        <div class="mt-5">
        <Jumbotron fluid class="mt-5">
          <Container>
            <h1 align="center" class="pb-0">Curating Data Content From Across the Web</h1>
          </Container>
        </Jumbotron>
        </div>
        <div class="container-fluid" >
          <div class="row" >
          
          <div class="col-lg mb-5">
              <Card bg="dark" text="light"><div class="card-header" ><h5>Industry</h5></div></Card>
              <Stream/>
            </div>

            <div class="col-lg mb-5">
              <Card bg="dark" text="light"><div class="card-header" ><h5>Analyze</h5></div></Card>
              <Stream/>
            </div>
            <div class="col-lg mb-5">
            <Card bg="dark" text="light"><div class="card-header"><h5>Model</h5></div></Card>
              <Stream/>
            </div>
            <div class="col-lg mb-5">
            <Card bg="dark" text="light"><div class="card-header"><h5>Deploy</h5></div></Card>
              <Stream/>
            </div>
          </div>
        </div>
        
      </div>
      
    );
}

export default App;
