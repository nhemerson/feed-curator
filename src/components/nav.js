import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

function ToggleButtonExample() {
    
  
    return (
      <div className='p-3'>
        
        <ButtonGroup aria-label="Basic example">
          <Button href='/domain' variant="secondary" >Domain</Button>
          <Button href= '/media' variant="secondary">Media</Button>
          <Button href='/level' variant="secondary">Level</Button>
        </ButtonGroup>
      </div>
    );
  }
  


  export default ToggleButtonExample