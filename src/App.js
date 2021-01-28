import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideMenu from './components/sideMenu';
import DomainMedia from './components/mediaDomain';
import DomainLevel from './components/levelDomain';
import DomainDefault from './components/domain'
//import DomainDefault from './components/domain';
//import IndustryStream from "./components/streamRenderIndustry.js";
//import AnalyzeStream from "./components/streamRenderAnalyze.js";
//import VisualizeStream from "./components/streamRenderVisualize.js";
//import ModelStream from "./components/streamRenderModel.js";
//import DeployStream from "./components/streamRenderDeploy.js";
import './App.css'
import { Column, Row} from 'simple-flexbox';
import ToggleButtonExample from './components/nav'


function App() {
    return (
        <div className="App">
            <Row> 
            <Router>
              <Column >
                
                <SideMenu />
                
              </Column>
              
                <Column flexGrow={1}>
                   

                   
                    <div style={{backgroundColor:"#242423"}}>
                    <Row>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons" >
                            <ToggleButtonExample />
                        </div>
                    </Row>
                    </div>
                      <Switch>
                        <Route path="/" exact component={DomainDefault}></Route>
                        <Route path="/domain" component={DomainDefault}></Route>
                        <Route path="/media" component={DomainMedia}></Route>
                        <Route path="/level" component={DomainLevel}></Route>
                      </Switch>
                    
                </Column>
                </Router>
            </Row>
            
            
        
        </div>
     
    );
}

export default App;
