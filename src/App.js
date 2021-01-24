//import './App.css';
import React from 'react';
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stream from "./components/streamRender.js";
import SideMenu from "./components/sideMenu.js";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
//import Card from 'react-bootstrap/Card';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';


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
         
            <h1 align="center" class="pb-0">Curating Data Content From Across the Web</h1>
          
        </Jumbotron>
        </div>
        <div class="container-fluid" >
          <div class="row" >
          <SideMenu/>
          <div class="col-lg mb-5">
              <Card bg="dark" text="light"><div class="card-header" ><h5>Industry</h5></div></Card>
              
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
