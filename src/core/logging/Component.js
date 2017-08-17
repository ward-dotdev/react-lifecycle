import {Component} from 'react'
import log from './log'

export default class LogLifecyleComponent extends Component {
  log = log

  // - Start of cycle
  // - assign to this.state to set initial state.
  constructor (props) {
    super(props)
    this.actualRender = this.render
    this.cycleNum = 1
    this.log('constructor(props)')
  }

  // - Invoked Once (client and server)
  // - Can change state here with this.setState(), will not trigger additional render
  // - Just before frist render()
  componentWillMount () {
    this.log('componentWillMount()')
  }

  // - Invoked Once (client only)
  // - Refs to children now available
  // - Integrate other JS frameworks, timers, ajax etc. here
  // - Just after first render()
  // - End of Cycle
  componentDidMount () {
    this.log('componentDidMount()')
  }

  // - Start of cycle
  // - Invoked when component is receiving new props
  // - Not called in cycle #1
  // - This.props is old props, parameter to this function is nextProps
  // - Can call this.setState() here, will not trigger additional render
  componentWillReceiveProps (nextProps) {
    this.log('componentWillReceiveProps(nextProps)')
  }

  // - Invoked when new props/state being received
  // - Not called in cycle #1, not called on forceUpdate()
  // - Returning false from here prevents component update and the next 2 parts of the Lifecycle: componentWillUpdate() componentDidUpdate()
  // - Component returns true by default, PureComponent does a shallow compare
  shouldComponentUpdate (nextProps, nextState) {
    this.cycleNum++
    this.log('shouldComponentUpdate(nextProps, nextState)')
    return true
  }

  // - Cannot use this.setState(), do that in componentWillReceiveProps()
  // - Just before render() except the first render()
  componentWillUpdate (nextProps, nextState) {
    this.log('componentWillUpdate(nextProps, nextState)')
  }

  // - Just after render() except the first render()
  componentDidUpdate (prevProps, prevState) {
    this.log('componentDidUpdate(prevProps, prevState)')
  }

  // - Contruct output to render based on this.props and this.state
  render () {
    this.log('render()')
    return this.actualRender()
  }

  // - Invoked immediately before a component is unmounted from DOM
  // - Do cleanup here. e.g. kill timers and unlisten to events such as flux store updates
  componentWillUnmount () {
    this.log('componentWillUnmount()')
  }
}
