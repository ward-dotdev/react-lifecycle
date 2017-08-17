import React from 'react'
import {log} from '../core/logging'

const FunctionalComponent = props => {
  log('FunctionalComponent')

  return (
    <p>I am a functional component</p>
  )
}

export default FunctionalComponent

// NOTE: Same output but component won't have displayName
// https://facebook.github.io/react/docs/react-component.html#displayname
// export default props => <p>I am functional</p>
