import React, { Component } from 'react';
import axios from 'axios';


import HazOpen from './HazOpen.jsx';
import HazPrettyData from './HazPrettyData.jsx';

class  App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          hazData: [],
          barData:{
            Mon: {13: 2, 14: 1},
            Tue: {14: 2},
            Wed: {},
            Thu: {14: 2, 13: 1},
            Fri: {14: 1, 13: 1 , 16: 1},
            Sat: {16: 2, 14: 1},
            Sun: {16: 1, 13: 1}
          }
      };
  };

  componentDidMount() {
    this.getAllSoldOutData();
  }

  getAllSoldOutData() {
    axios.get('/allSoldOutData')
      .then(response => {
        let data = response.data

        let forBar = [0, 0, 0, 0, 0, 0, 0];
        let hrCircleLabels = [];
        let hrCricleCounts = [];

        for(let i=0; i < data.length; i++) {

          if(!hrCircleLabels.includes(data[i].sellOutTime)) {
            hrCircleLabels.push(data[i].sellOutTime);
            hrCricleCounts.push(1);
          }
          if(hrCircleLabels.includes(data[i].sellOutTime)) {
            let indexAt = hrCircleLabels.indexOf(data[i].sellOutTime);
            hrCricleCounts[indexAt] = hrCricleCounts[indexAt] + 1;
          }

          if(data[i].sellOutDate === "Mon") {
            forBar[0]++;
          }
          if(data[i].sellOutDate === "Tue") {
            forBar[1]++;
          }
          if(data[i].sellOutDate === "Wed") {
            forBar[2]++;
          }
          if(data[i].sellOutDate === "Thu") {
            forBar[3]++;
          }
          if(data[i].sellOutDate === "Fri") {
            forBar[4]++;
          }
          if(data[i].sellOutDate === "Sat") {
            forBar[5]++;
          }
          if(data[i].sellOutDate === "Sun") {
            forBar[6]++;
          }                              
        }

        this.setState({ 
          hazData: data,
          barData: forBar,
          circleLabelData: hrCircleLabels,
          circleNumData: hrCricleCounts,
          circleLength: hrCricleCounts.length
        })
      })
      .catch((err) => {
        console.log(`error getting allSoldOutData on client`, err);
      })
  }


  render() {
      return (
      
        <div className='centerIt'>
            <h1>Haz Donuts at Porpoise?</h1>
            <HazOpen />
            <HazPrettyData soldOut={this.state.barData} cirLabel={this.state.circleLabelData} cirNum={this.state.circleNumData} cirLngth={this.state.circleLength}/>
        </div>
        
      )
  };
};

export default App;