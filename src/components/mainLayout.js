//import './App.css';
import React, { Component } from 'react';
//import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stream from "./streamRender.js";

//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
//import Card from 'react-bootstrap/Card';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';


class MainLayout extends Component {

  render() {
    return (
      
      <main>
          <div className="btn-toggle" >
        
          </div>
        <header>

            <Jumbotron>
            <Container>
                <h1 align="center" class="pb-0">Curating Data Content From Across the Web</h1>
            </Container>
            </Jumbotron>

        </header>

        
                <div className="block ">
                <Card bg="dark" text="light"><div class="card-header" ><h5>Industry</h5></div></Card>
                <Stream/>
                </div>

                <div className="block ">
                <Card bg="dark" text="light"><div class="card-header" ><h5>Analyze</h5></div></Card>
                <Stream/>
                </div>

                <div className="block ">
                <Card bg="dark" text="light"><div class="card-header"><h5>Model</h5></div></Card>
                <Stream/>
                </div>

                <div className="block ">
                <Card bg="dark" text="light"><div class="card-header"><h5>Deploy</h5></div></Card>
                <Stream/>
                </div>

         
        
      </main>
      
    );
  }
    
}

export default MainLayout;
