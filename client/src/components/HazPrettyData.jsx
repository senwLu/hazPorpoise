import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import moment from 'moment';

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Times Sold Out (Last 30 days)',
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(225, 224, 111, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(225, 224, 111, 1)',
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 21]
      }
    ]
  };


class  HazPrettyData extends Component {
  constructor(props) {
      super(props);
      this.state = {
          barData: {},
          percData: {}
      }
  };


  

  


  render() {
    return (
        <div>
            <Bar data={data} width={400} height={400} options={{
            maintainAspectRatio: false
          }}/>
        </div>
    )
  };

};

export default HazPrettyData;