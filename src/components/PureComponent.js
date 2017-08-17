import React from 'react'
import {PureComponent as LogPureComponent} from '../core/logging'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class PureComponent extends LogPureComponent {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        name: 'pure component',
        description: 'I am a pure component.'
      }
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    this.log('shouldComponentUpdate()')

    // return this.desc.innerHTML !== nextState.data.description

    return PureRenderMixin.shouldComponentUpdate.bind(this)(nextProps, nextState)

    // NOTE: no difference between current and next state because the data object was mutated
    // console.log(this.state.data, nextState.data)
    // return this.state.data.description !== nextState.data.description
  }
  updateDescription = () => {
    this.log('=> updateDescription')

    // const newData = this.state.data
    // newData.description = 'I am also a class based component'
    const newData = {
      ...this.state.data,
      description: 'I am also a class based component'
    }

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
