import React, { Component } from 'react'

export default class Results extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store
  }
  votesInPersent(val) {
    if (this.store.getState()[val].count) {
      return this.getPercent(this.store.getState()[val].count)
    } else {
      return 0
    }
  }
  getPercent(val) {
    return val / this.sumAll() * 100
  }
  sumAll() {
    return (this.store.getState().angular.count +
      this.store.getState().react.count +
      this.store.getState().vue.count)
  }
  render() {
    return (
      <div>
        {
          Object.keys(this.store.getState()).map(k =>
            <div key={k}>
              <span
                className={"label label-" + this.store.getState()[k].class}>
                {this.store.getState()[k].name}: {this.votesInPersent(k).toFixed(2) + '%'}
              </span>
              <div className="progress progress-striped active">
                <div className={"progress-bar progress-bar-" + this.store.getState()[k].class}
                  style={{ width: this.votesInPersent(k).toFixed(2) + '%' }}>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
