import React, { Component } from 'react'
import DecayDefault from './DecayDefault';

export class Decays extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3"><DecayDefault /></div>
        <div className="col s3"></div>
      </div>
    )
  }
}

export default Decays
