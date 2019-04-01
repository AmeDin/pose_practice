import React, { Component } from 'react'
import posed from 'react-pose'

const PoseBox = posed.div({
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: 100
          }
    }
  });

export class Box extends Component {
    state = { isVisible: true };
    componentDidMount() {
      setInterval(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
  
    render() {
      const { isVisible } = this.state;
      return <PoseBox className="box" pose={isVisible ? 'visible' : 'hidden'} />;
    }
  }

export default Box
