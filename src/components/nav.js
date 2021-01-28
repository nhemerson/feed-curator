import React, { useState } from "react";
import {ButtonGroup, Button} from 'react-bootstrap';

function ToggleButtonExample() {
    
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Domain', value: '1', to: '/domain' },
      { name: 'Media', value: '2', to: '/media' },
      { name: 'Level', value: '3', to: '/level' }
    ];
  
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