import React, {Component} from 'react'
import LifecycleCounter from './LifecycleCounter'
import FunctionalComponent from './FunctionalComponent'
import ClassBasedComponent from './ClassBasedComponent'

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
  renderContent (show) {
    if (show) {
      return <LifecycleCounter log />
    }

    return (
      <div style={{backgroundColor: '#ddd'}}>
        <FunctionalComponent />
        <ClassBasedComponent />
      </div>
    )
  }
  render () {
    return (
      <div>
        <p>React lifecycle</p>
        <button onClick={this.toggleCounter}>
          Toggle content
        </button>
        {this.renderContent(this.state.showCounter)}
      </div>
    )
  }
}
