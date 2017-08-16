import React, {Component} from 'react'
import ComponentGallery from './ComponentGallery'
import FunctionalComponent from './FunctionalComponent'
import ClassBasedComponent from './ClassBasedComponent'
import PureComponent from './PureComponent'
import SongGallery from './SongGallery'

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
        return <SongGallery />
      case 1:
        return (
          <ComponentGallery>
            <FunctionalComponent />
            <ClassBasedComponent />
          </ComponentGallery>
        )
      case 2:
        return <PureComponent />
      default:
        return <p>No content to show</p>
    }
  }
  render () {
    return (
      <div>
        <h1>React lifecycle</h1>
        <button onClick={this.toggleContent}>
          Toggle content
        </button>
        {this.renderContent(this.state.shownContent)}
      </div>
    )
  }
}
