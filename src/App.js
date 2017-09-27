import React, { Component } from 'react';
import { voteAngular, voteReact, voteVue } from './actions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular())
  }
  handleVoteReact = () => {
    this.store.dispatch(voteReact())
  }
  handleVoteVue = () => {
    this.store.dispatch(voteVue())
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ 'textAlign': 'center' }}>
          <h2>What is your favorite front-end tools in 2017</h2>
          <h4>Click on the logos to vote</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular} />
            </div>
            <div className="col-xs-2">
              <img src="react_logo.png" height="96" alt="React" onClick={this.handleVoteReact} />
            </div>
            <div className="col-xs-2">
              <img src="vue_logo.png" height="96" alt="Vue" onClick={this.handleVoteVue} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
