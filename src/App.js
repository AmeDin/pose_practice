import React, { Component } from 'react';
import Boxes from './components/Tween/Boxes';
import Springs from './components/Spring/Springs';
import Decays from './components/Decay/Decays';
import Keyframes from './components/Keyframe/Keyframes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Boxes />
        <Springs />
        <Decays />
        <Keyframes />
      </div>
    );
  }
}

export default App;
