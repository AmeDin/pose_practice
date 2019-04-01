import React, { Component } from 'react'
import posed from 'react-pose'

const PoseTweenCircle = posed.div({
    hidden: {
     opacity: 0,
     scale: 0.5,
      transition: {
          ease: 'circOut'
        } 
      },
    visible: { 
        opacity: 1,
        scale: 1,
        transition: {
            ease: 'circIn'  
          }
    }
  });

export class TweenCircle extends Component {
    state = { isVisible: true };
    componentDidMount() {
      setInterval(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
  
    render() {
      const { isVisible } = this.state;
      return <PoseTweenCircle className="box" pose={isVisible ? 'visible' : 'hidden'} />;
    }
  }

export default TweenCircle
