import React from 'react'
import {PureComponent as LogPureComponent} from '../core/logging'

export default class PureComponent extends LogPureComponent {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        name: 'pure component',
        description: 'I\'m a pure component.'
      }
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    this.cycleNum++
    this.log('shouldComponentUpdate(nextProps, nextState)')

    // NOTE: no difference between current and next state if the data object was mutated
    return this.desc.innerHTML !== nextState.data.description
    // return this.state.data !== nextState.data
  }
  updateDescription = () => {
    this.log('=> updateDescription')

    // NOTE: difference mutating an object in state or creating a new object and updating state
    const newData = this.state.data
    newData.description = 'I\'m also a class based component'
    // const newData = {
    //   ...this.state.data,
    //   description: 'I am also a class based component'
    // }

    this.setState({data: newData})
  }
  render () {
    this.log('render()')

    return (
      <div style={{backgroundColor: '#ddd'}}>
        <h2>Pure component</h2>
        <p ref={ref => { this.desc = ref }}>{this.state.data.description}</p>
        <button onClick={this.updateDescription}>Update</button>
      </div>
    )
  }
}
