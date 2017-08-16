import React from 'react'

export default class PureComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.log('1 | constructor')

    this.state = {
      data: {
        name: 'pure component',
        description: 'I am a class based component'
      }
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    this.log('5 | componentWillReceiveProps')

    return this.desc.innerHTML !== nextState.data.description

    // NOTE: no difference between current and next state because the data object was mutated
    // console.log(this.state.data, nextState.data)
    // return this.state.data.description !== nextState.data.description
  }
  componentWillUpdate (nextProps, nextState) {
    this.log('6 | shouldComponentUpdate')
  }
  componentDidUpdate (prevProps, prevState) {
    this.log('7 | componentDidUpdate')
  }
  log = str => {
    if (this.props.log) console.log(`${this.constructor.name} | ${str}`)
  }
  updateDescription = () => {
    this.log('=> updateDescription')

    const newData = this.state.data
    newData.description = 'I am a pure component'

    this.setState({data: newData})
  }
  render () {
    this.log('render')

    return (
      <div style={{backgroundColor: '#ddd'}}>
        <p ref={ref => { this.desc = ref }}>{this.state.data.description}</p>
        <button onClick={this.updateDescription}>Update</button>
      </div>
    )
  }
}
