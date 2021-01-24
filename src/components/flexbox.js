import React, { Component } from 'react';
import { Column, Row} from 'simple-flexbox';


class ExampleComponent extends Component {
    render() {
      return (
          <Row>
              <Column>test</Column>
              <Column>Test</Column>
              <Column>TETSTSTS</Column>
          </Row>
       
      );
    }
  }
  
  export default ExampleComponent;