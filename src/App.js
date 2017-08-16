import React, {Component} from 'react'
import LifecycleCounter from './LifecycleCounter'
import FunctionalComponent from './FunctionalComponent'
import ClassBasedComponent from './ClassBasedComponent'
import PureComponent from './PureComponent'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shownContent: 0
    }
  }
  toggleContent = () => {
    this.setState(({shownContent}) => {
      return {
        shownContent: shownContent < 2 ? shownContent + 1 : 0
      }
    })
  }
  renderContent (show) {
    switch (show) {
      case 0:
        return <LifecycleCounter log />
      case 1:
        return (
          <div style={{backgroundColor: '#ddd'}}>
            <FunctionalComponent />
            <ClassBasedComponent />
          </div>
        )
      case 2:
        return <PureComponent log />
      default:
        return <p>No content to show</p>
    }
  }
  render () {
    return (
      <div>
        <p>React lifecycle</p>
        <button onClick={this.toggleContent}>
          Toggle content
        </button>
        {this.renderContent(this.state.shownContent)}
      </div>
    )
  }
}
