import React from 'react'
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';
import ShowAlert from "./alert"

    const Articles = ({ articles }) => {
      return (
        <div>
          
          {articles.map((articles) => (
            <div class="card p-2 mt-3">
              <Media>
                <img
                  width={70}
                  height={70}
                  className="mr-3"
                  src={articles.img_src}
                  alt="General Placeholder"
                />
                <Media.Body>
                  <h5>{articles.headline}</h5>
               
                  
                  <Button variance="primary" size="sm" href={articles.url} class="card-link" target="_blank">View</Button>{' '}
                  <ShowAlert/>{' '}
                  <Button variant="link">{articles.level}</Button>
                  
                  
                  
              

                </Media.Body>
              </Media>
            </div>
          ))}
        </div>
      )
    };


    

    export default Articles