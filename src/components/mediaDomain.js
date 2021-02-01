import React from 'react';

import ArticleStream from "./streamRenderArticle.js";
import VideoStream from "./streamRenderVideo.js";

import { Column, Row} from 'simple-flexbox';

function DomainMedia() {
    return (
        <div className="App">
              
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <Row class><div className='p-3'><ArticleStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                    <Row horizontal='space-around'>
                      <Column >
                        <div className="block ">
                            <Row class><div className='p-3'><VideoStream/></div></Row>
                        </div>
                      </Column>
                    </Row>
                            
        </div>
     
    );
}

export default DomainMedia;
