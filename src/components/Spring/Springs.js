import React, { Component } from 'react'
import SpringDefault from './SpringDefault';
import SpringMassVelocity from './SpringMassVelocity';

export class Springs extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3"><SpringDefault /></div>
        <div className="col s3"><SpringMassVelocity /></div>
      </div>
    )
  }
}

export default Springs
