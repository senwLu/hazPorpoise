import React, { Component } from 'react';
import moment from 'moment';

class  HazOpen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        time: moment().format("k:mm:ss"),
        isOpen: 'open'
      }
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let checker = moment().format("k")
    if((Number(checker) >= 7 && Number(checker) < 16)) {
      this.setState({
        time: moment().format("k:mm:ss"),
        isOpen: 'open'
      });
    }else {
      this.setState({
        time: moment().format("k:mm:ss"),
        isOpen: 'closed'
      });
    }
  }


  render() {
    if(this.state.isOpen === 'closed') {
      return (
        <div>
          <p>The time is currently: {this.state.time}</p>
          <h2>All stores are now CLOSED</h2>
        </div>
      )
    }else {
      return (
        <div>
          <p>The time is currently: {this.state.time}</p>
          <h2>All stores are OPEN</h2>
        </div>
      )
    }
  };

};

export default HazOpen;