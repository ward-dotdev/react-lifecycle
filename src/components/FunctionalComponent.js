import React from 'react'
import {log} from '../core/logging'

const FunctionalComponent = props => {
  log('FunctionalComponent')

  return (
    <p>I'm a functional component</p>
  )
}

export default FunctionalComponent
