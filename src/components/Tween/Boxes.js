import React, { Component } from 'react'
import Box from './Box';
import TweenCubic from './TweenCubic';
import TweenCircle from './TweenCircle';
import TweenAnticipate from './TweenAnticipate';

export class Boxes extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3"><Box /></div>
        <div className="col s3"><TweenCubic /></div>
        <div className="col s3"><TweenCircle /></div>
        <div className="col s3"><TweenAnticipate /></div>
      </div>
    )
  }
}

export default Boxes
