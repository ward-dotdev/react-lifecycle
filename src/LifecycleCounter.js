import React, {Component} from 'react'

// Lifecycle method comments from https://reactcheatsheet.com/
export default class LifecycleCounter extends Component {
  constructor (props) {
    super(props)
    this.log('1 | constructor')

    this.state = {count: 0}
  }
  // invoked once.
  // fires before initial 'render'
  componentWillMount () {
    this.log('2 | componentWillMount')
  }
  // good for AJAX: fetch, ajax, or subscriptions.
  // invoked once (client-side only).
  // fires before initial 'render'
  componentDidMount () {
    this.log('3 | componentDidMount')
  }
  // invoked every time component is recieves new props.
  // does not before initial 'render'
  componentWillReceiveProps (nextProps) {
    this.log('4 | componentWillReceiveProps')
  }
  // invoked before every update (new props or state).
  // does not fire before initial 'render'.
  shouldComponentUpdate (nextProps, nextState) {
    this.log('5 | componentWillReceiveProps')

    return this.state.count !== nextState.count
  }
  // invoked immediately before update (new props or state).
  // does not fire before initial 'render'.
  // (see componentWillReceiveProps if you need to call setState)
  componentWillUpdate (nextProps, nextState) {
    this.log('6 | shouldComponentUpdate')
  }
  // invoked immediately after DOM updates
  // does not fire after initial 'render'
  componentDidUpdate (prevProps, prevState) {
    this.log('7 | componentDidUpdate')
  }
  // invoked immediately before a component is unmounted.
  componentWillUnmount () {
    this.log('8 | componentWillUnmount')
  }
  log = str => {
    if (this.props.log) console.log(`${this.constructor.name} | ${str}`)
  }
  addCount = () => {
    this.log('=> addCount')

    // NOTE: https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
    this.setState({count: this.state.count + 1})
  }
  render () {
    this.log('render')

    return (
      <div style={{backgroundColor: '#ddd'}}>
        <p>Lifecycles: {this.state.count}</p>
        <button onClick={this.addCount}>Add</button>
      </div>
    )
  }
}
