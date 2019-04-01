import React, { Component } from 'react'
import posed from 'react-pose'
import { tween, easing, spring } from 'popmotion';

const PoseDecayDefault = posed.div({
    hidden: {
     opacity: 0,
     scale: 0.5,
     transition: {
        type: "decay",
        // velocity: 200,
        // from: 50,
        modifyTarget: v => Math.round(v / 100) * 100
        }
      },
    visible: { 
        opacity: 1,
        scale: 1,
        transition: {
          
        }
    }
  });

export class DecayDefault extends Component {
    state = { isVisible: true };
    componentDidMount() {
      setInterval(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
  
    render() {
      const { isVisible } = this.state;
      return <PoseDecayDefault className="box" pose={isVisible ? 'visible' : 'hidden'} />;
    }
  }

export default DecayDefault
