import React, { Component } from 'react';
import axios from 'axios';

import HazOpen from './HazOpen.jsx';
import HazPrettyData from './HazPrettyData.jsx';

class  App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          hazData: []
      };
      
  };

  componentDidMount() {
    this.getAllSoldOutData();
  }

  getAllSoldOutData() {
    axios.get('/allSoldOutData')
      .then(response => {
        this.setState({ 
          hazData: response.data 
        })
      })
      .catch((err) => {
        console.log(`error getting allSoldOutData on client`, err);
      })
  }


  render() {
      return (
      
        <div>
            <h1>Haz Donuts at Porpoise?</h1>
            <HazOpen />
            <HazPrettyData soldOut={this.state.hazData}/>
        </div>
        
      )
  };
};

export default App;