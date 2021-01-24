import React from 'react';
import SideMenu from './components/sideMenu'
import Stream from "./components/streamRender.js";
import './App.css'
import { Column, Row} from 'simple-flexbox';
import ToggleButtonExample from './components/nav'

function App2() {
    return (
        <div className="App">
            <Row> 
              <Column ><SideMenu /></Column>
              
              <Column flexGrow={1}>
                    <div style={{backgroundColor:"#242423"}}>
                    <Row>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons" >
                            <ToggleButtonExample />
                        </div>
                    </Row>
                    </div>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Industry</h5></div>
                            <Row class><div className='p-3'><Stream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <div class="card-header"><h5 class='text-light'>Analyze</h5></div>
                            <Row class><div className='p-3'><Stream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column>
                        <div className="block ">
                            <div class="card-header" ><h5 class='text-light'>Model</h5></div>
                            <Row class><div className='p-3'><Stream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row>
                      <Column>
                        <div className="block ">
                            <div class="card-header" ><h5 class='text-light'>Deploy</h5></div>
                            <Row class><div className='p-3'><Stream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                 
                </Column>
                
          </Row>
            
            
        
        </div>
     
    );
}

export default App2;
