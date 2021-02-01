import React from "react";

import {Button, Navbar, Nav} from 'react-bootstrap';

import {Link} from 'react-router-dom'

import tempLogo from './tempLogo.png';



function ToggleNav() {
  
    return (
      <div className='p-3'>
        <Navbar fixed = 'top' expand="sm"  variant="dark" className = 'bg-style'>
          <Navbar.Brand>
            <img src={tempLogo} alt='none' width={35}></img>{' '}
            Relu.io
            </Navbar.Brand>
          
            <Nav className="mr-auto" style={{ marginLeft: 80}}>


                <Link to="/domain">
                  <Button className='ml-2' variant="dark">
                    <span>Domain</span>
                  </Button>
                </Link>{' '}

                <Link to="/media">
                  <Button className='ml-2' variant="dark">
                    <span>Media</span>
                  </Button>
                </Link>{' '}

                <Link to="/level">
                  <Button className='ml-2' variant="dark">
                    <span>Level</span>
                  </Button>
                </Link>{' '}

                 
               
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/nhemerson/feed-curator" target='_blank"'>Github</Nav.Link>
              <Nav.Link eventKey={2} href="Login">
                Login
              </Nav.Link>
            </Nav>
        </Navbar>
        
      </div>
    );
  }

  export default ToggleNav