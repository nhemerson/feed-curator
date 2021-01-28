import React from 'react';
//import SideMenu from './components/sideMenu'
import IndustryStream from "./streamRenderIndustry.js";
import AnalyzeStream from "./streamRenderAnalyze.js";
import VisualizeStream from "./streamRenderVisualize.js";
//import './App.css'
import { Column, Row} from 'simple-flexbox';
//import ToggleButtonExample from 'nav.js';

function DomainLevel() {
    return (
        <div className="App">

              
              
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Beginner</h5></div>
                            <Row class><div className='p-3'><IndustryStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Intermediate</h5></div>
                            <Row class><div className='p-3'><AnalyzeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Advanced</h5></div>
                            <Row class><div className='p-3'><VisualizeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    
                    
                    
                 
            
                

            
            
        
        </div>
     
    );
}

export default DomainLevel;
