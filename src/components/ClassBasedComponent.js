import React from 'react'
import {Component} from '../core/logging'

export default class ClassBasedComponent extends Component {
  render () {
    this.log('render()')

    return (
      <p>I'm a class based component</p>
    )
  }
}
