import React from 'react';

import IndustryStream from "./streamRenderIndustry.js";
import AnalyzeStream from "./streamRenderAnalyze.js";
import VisualizeStream from "./streamRenderVisualize.js";
import ModelStream from "./streamRenderModel.js";
import DeployStream from "./streamRenderDeploy.js";

import { Column, Row} from 'simple-flexbox';


function DomainDefault() {
    return (
        <div className="App">
              
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <Row class><div className='p-3'><IndustryStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <Row class><div className='p-3'><AnalyzeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <Row class><div className='p-3'><VisualizeStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column>
                        <div className="block ">
                            <Row class><div className='p-3'><ModelStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <div className="block ">
                            <Row class><div className='p-3'><DeployStream/></div></Row>
                        </div>
                      </Column>
                    </Row>  
        
        </div>
     
    );
}

export default DomainDefault;
