import React from 'react';
//import SideMenu from './components/sideMenu'
import IndustryStream from "./streamRenderIndustry.js";
import AnalyzeStream from "./streamRenderAnalyze.js";
import VisualizeStream from "./streamRenderVisualize.js";
import ModelStream from "./streamRenderModel.js";
import DeployStream from "./streamRenderDeploy.js";
//import './App.css'
import { Column, Row} from 'simple-flexbox';
//import ToggleButtonExample from 'nav.js';

function DomainLevel() {
    return (
        <div className="App">

              
              
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Industry</h5></div>
                            <Row class><div className='p-3'><IndustryStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Analyze</h5></div>
                            <Row class><div className='p-3'><AnalyzeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Visualize</h5></div>
                            <Row class><div className='p-3'><VisualizeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column>
                        <div className="block ">
                            <div class="card-header" ><h5 class='text-light'>Model</h5></div>
                            <Row class><div className='p-3'><ModelStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <div className="block ">
                            <div class="card-header" ><h5 class='text-light'>Deploy</h5></div>
                            <Row class><div className='p-3'><DeployStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    
                 
            
                

            
            
        
        </div>
     
    );
}

export default DomainLevel;
