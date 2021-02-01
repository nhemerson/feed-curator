import React from 'react';

import Button from 'react-bootstrap/Button';
import { Card, CardDeck } from 'react-bootstrap';

import ShowAlert from "./alert";

import { Row } from 'simple-flexbox';


    const Heading = ({articles}) => {
        return (
          <div className='p-2'>
            
            {articles.map((articles) => (
                <h5 class='text-light'>{articles.level}</h5>
            ))}
            
          </div>
        )
    }

    const Articles = ({ articles }) => {
      return (
        
        <div>
          
          <Row wrap>
         
            <CardDeck>

            
          {articles.map((articles) => (
            <div className='p-2'>
            
              <Card bg='dark' style={{ width: '15rem' }}>
                <Card.Header>
                  <div >
                    <h5><small class="text-info">{articles.media} - {articles.domain}</small></h5>
                  </div> </Card.Header>
                
                <Card.Body>
                 
                  <Card.Text>
                    <p class='text-light'>{articles.headline}</p>
                  </Card.Text>
                  
                </Card.Body>
                <Card.Footer>
                  
                  <Row >
                    <div className='p-1'><img src={articles.img_src} width={35} alt="placeholder" />{' '}</div> 
                    <div className='p-1'><Button variant="info" size="sm" href={articles.url} class="card-link" target="_blank">View</Button>{' '}</div>
                    <div className='p-1'><ShowAlert/>{' '}</div>
                  </Row>
                
                </Card.Footer>
              </Card>


              </div>
              
          ))}
              
          </CardDeck>
        
          </Row>
        </div>
      )
    };


    

    export default Articles;
    export {
      Heading
    }