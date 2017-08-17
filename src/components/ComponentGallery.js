import React from 'react'
import {Component} from '../core/logging'

export default class ComponentGallery extends Component {
  render () {
    this.log('render()')

    const {children, ...rest} = this.props

    return (
      <div style={{backgroundColor: '#ddd'}} {...rest}>
        <h2>Component Gallery</h2>
        {children}
      </div>
    )
  }
}
