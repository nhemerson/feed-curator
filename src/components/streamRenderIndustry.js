import React, { Component } from 'react';

import Articles from './stream';
import {Heading} from './stream';


class IndustryStream extends Component {

    state = {
      articles: []
    };
  
    componentDidMount() {
      fetch('https://raw.githubusercontent.com/nhemerson/feed-curator/main/data/dataIndustry_model_MVP.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ articles: data })
      })
      .catch(console.log)
    };
  
    render() {
      return (
        <div>
        <Heading articles={this.state.articles.slice(0,1)} />
        <Articles articles={this.state.articles} />
        </div>
      )
    };
  
    
  };

  export default IndustryStream;