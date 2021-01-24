import React, { useState } from "react";
import {ButtonGroup, ToggleButton} from 'react-bootstrap';

function ToggleButtonExample() {
    
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Domain', value: '1' },
      { name: 'Media', value: '2' },
      { name: 'Level', value: '3' }
    ];
  
    return (
      <div className='p-3'>
        
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    );
  }
  


  export default ToggleButtonExample