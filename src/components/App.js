import React from 'react'
import {Component} from '../core/logging'
import ComponentGallery from './ComponentGallery'
import FunctionalComponent from './FunctionalComponent'
import ClassBasedComponent from './ClassBasedComponent'

export default class App extends Component {
  render () {
    this.log('render()')

    return (
      <div>
        <h1>React lifecycle</h1>
        <ComponentGallery>
          <FunctionalComponent />
          <ClassBasedComponent />
        </ComponentGallery>
      </div>
    )
  }
}
