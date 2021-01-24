import React from 'react'
import Button from 'react-bootstrap/Button';
//import Media from 'react-bootstrap/Media';
import ShowAlert from "./alert"
import { Row } from 'simple-flexbox';
import { Card, CardDeck } from 'react-bootstrap'

    const Articles = ({ articles }) => {
      return (
        <div>
          <Row wrap>
            <CardDeck>
          {articles.map((articles) => (


              <Card style={{ width: '18rem' }}>
                <Card.Header>
                  <div >
                    <h5><small class="text-muted">{articles.media} - {articles.level}</small></h5>
                  </div> </Card.Header>
                
                <Card.Body>
                 
                  <Card.Text>
                      {articles.headline}
                  </Card.Text>
                  
                </Card.Body>
                <Card.Footer>
                  
                  <Row >
                    <div className='p-1'><img src={articles.img_src} width={35} alt="placeholder" />{' '}</div> 
                    <div className='p-1'><Button variant="dark" size="sm" href={articles.url} class="card-link" target="_blank">View</Button>{' '}</div>
                    <div className='p-1'><ShowAlert/>{' '}</div>
                  </Row>
                
                </Card.Footer>
              </Card>


           

          ))}
          </CardDeck>
          </Row>
        </div>
      )
    };


    

    export default Articles