import React, { Component } from 'react'
import posed from 'react-pose'

const PoseKeyframe = posed.div({
    hidden: {
     opacity: 1,
     scale: 0.5,
     transition: {
        width: 150,
        height: 150,
        flip: true,
        background: "#69a7c2"
        }
      },
    visible: { 
        opacity: 1,
        scale: 1,
        transition:  {
          width: "90vw",
          height: "90vh",
          flip: true,
          background: "#035D75"
        }
    }
  });

export class Keyframe extends Component {
    state = { isVisible: true };
    componentDidMount() {
      setInterval(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
  
    render() {
      const { isVisible } = this.state;
      return <PoseKeyframe className="box" pose={isVisible ? 'visible' : 'hidden'} />;
    }
  }

export default Keyframe
