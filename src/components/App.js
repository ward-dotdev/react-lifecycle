import React from 'react'
import {Component} from '../core/logging'
import ComponentGallery from './ComponentGallery'
import FunctionalComponent from './FunctionalComponent'
import ClassBasedComponent from './ClassBasedComponent'
import PureComponent from './PureComponent'
import SongGallery from './SongGallery'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 0
    }
  }
  toggleContent = () => {
    this.log('=> toggleContent')

    this.setState(({index}) => {
      return {
        index: index < 2 ? index + 1 : 0
      }
    })
  }
  renderContent (show) {
    switch (show) {
      case 0:
        return (
          <ComponentGallery>
            <FunctionalComponent />
            <ClassBasedComponent />
          </ComponentGallery>
        )
      case 1:
        return <PureComponent />
      case 2:
        return <SongGallery />
      default:
        return <p>No content to show</p>
    }
  }
  render () {
    this.log('render()')

    return (
      <div>
        {/* <h1>React lifecycle</h1> */}
        <button onClick={this.toggleContent}>
          Toggle content
        </button>
        {this.renderContent(this.state.index)}
      </div>
    )
  }
}
