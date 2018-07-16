import React, { Component } from 'react';
import {MilestoneNetwork} from "./milestone-network"
import {data} from "./data/example"

class App extends Component {
    
  render() {
      const {milestones, links, samples} = data
      return (
        <div style={{height: '100%', width: "100%", position: "fixed", display: "flex"}}>
            <MilestoneNetwork milestones={milestones} links={links} samples={samples} />
        </div>
      );
  }
}

export default App;
