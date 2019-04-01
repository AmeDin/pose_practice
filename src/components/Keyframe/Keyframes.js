import React, { Component } from 'react'
import Keyframe from './Keyframe';

export class Keyframes extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3"><Keyframe /></div>
        <div className="col s3"></div>
      </div>
    )
  }
}

export default Keyframes
