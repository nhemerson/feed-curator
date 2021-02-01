import React from 'react';
//import SideMenu from './components/sideMenu'
import BeginnerStream from "./streamRenderBeginner.js";
import IntermediateStream from "./streamRenderIntermediate.js";
import AdvancedStream from "./streamRenderAdvanced.js";
//import './App.css'
import { Column, Row} from 'simple-flexbox';
//import ToggleButtonExample from 'nav.js';

function DomainLevel() {
    return (
        <div className="App">

              
              
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block">
                            
                            <Row class><div className='p-3'><BeginnerStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            
                            <Row class><div className='p-3'><IntermediateStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            
                            <Row class><div className='p-3'><AdvancedStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    
                    
                    
                 
            
                

            
            
        
        </div>
     
    );
}

export default DomainLevel;
