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

function DomainMedia() {
    return (
        <div className="App">

              
              
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Article</h5></div>
                            <Row class><div className='p-3'><IndustryStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Video</h5></div>
                            <Row class><div className='p-3'><AnalyzeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    
                    
                   
                    
                 
            
                

            
            
        
        </div>
     
    );
}

export default DomainMedia;
