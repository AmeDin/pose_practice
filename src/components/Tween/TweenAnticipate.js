import React, { Component } from 'react'
import posed from 'react-pose'

const PoseTweenAnticipate = posed.div({
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
        opacity: 1,
        scale: 1,
        transition: {
            ease: 'anticipate'
          }
    }
  });

export class TweenAnticipate extends Component {
    state = { isVisible: true };
    componentDidMount() {
      setInterval(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
  
    render() {
      const { isVisible } = this.state;
      return <PoseTweenAnticipate className="box" pose={isVisible ? 'visible' : 'hidden'} />;
    }
  }

export default TweenAnticipate
