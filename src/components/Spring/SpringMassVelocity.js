import React, { Component } from 'react'
import posed from 'react-pose'
import { tween, easing, spring } from 'popmotion';

const PoseSpringMassVelocity = posed.div({
    hidden: {
     opacity: 0,
     scale: 0.5,
     transition: {
          type: "spring",
          stiffness: 500,
          delay: 200,
          mass: 1,
          velocity: 1
        }
      },
    visible: { 
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 500,
          delay: 200,
          mass: 10,
          velocity: 5
        }
    }
  });

export class SpringMassVelocity extends Component {
    state = { isVisible: true };
    componentDidMount() {
      setInterval(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
  
    render() {
      const { isVisible } = this.state;
      return <PoseSpringMassVelocity className="box" pose={isVisible ? 'visible' : 'hidden'} />;
    }
  }

export default SpringMassVelocity
