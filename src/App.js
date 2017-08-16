import React, {Component} from 'react'
import LifecycleCounter from './LifecycleCounter'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showCounter: false
    }
  }
  toggleCounter = () => {
    this.setState(prevState => {
      return {
        showCounter: !prevState.showCounter
      }
    })
  }
  render () {
    return (
      <div>
        <p>React lifecycle</p>
        <button onClick={this.toggleCounter}>
          {this.state.showCounter ? 'Hide' : 'Show'} counter
        </button>
        {this.state.showCounter && <LifecycleCounter />}
      </div>
    )
  }
}
