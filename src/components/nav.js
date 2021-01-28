import React from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

function ToggleButtonExample() {
    
  
    return (
      <div className='p-3'>
        
        <ButtonGroup aria-label="Basic example" toggle='6'>
          <Button href='/domain' variant="secondary" toggle>Domain</Button>
          <Button href= '/media' variant="secondary">Media</Button>
          <Button href='/level' variant="secondary">Level</Button>
        </ButtonGroup>
      </div>
    );
  }
  


  export default ToggleButtonExample