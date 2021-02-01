import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SideMenu from './components/sideMenu';

import DomainDefault from './components/domain';
import DomainMedia from './components/mediaDomain';
import DomainLevel from './components/levelDomain';

import './App.css'

import { Column, Row} from 'simple-flexbox';

import ToggleNav from './components/nav'


function App() {
    return (
        <div className="App">
            <Row> 
              <Router>
                <Column>
                  <Row>

                    <ToggleNav />

                  </Row>
                  <Row>
                    <Column >
                        
                      <SideMenu />
                      
                    </Column>
                  
                    <Column >
                  
                      <Row style={{ marginLeft: 195, marginTop:25}}>
                        <div>
                          <Switch>
                            <Route path="/" exact component={DomainDefault}></Route>
                            <Route path="/domain" component={DomainDefault}></Route>
                            <Route path="/media" component={DomainMedia}></Route>
                            <Route path="/level" component={DomainLevel}></Route>
                          </Switch>
                        </div>
                      </Row>

                    </Column>
                  </Row>
                </Column>
              </Router>
            </Row>
            
            
        
        </div>
     
    );
}

export default App;
