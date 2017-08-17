import {PureComponent} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import log from './log'

export default class LogLifecylePureComponent extends PureComponent {
  log = log

  constructor (props) {
    super(props)
    this.actualRender = this.render
    this.cycleNum = 1
    this.log('constructor(props)')
  }

  componentWillMount () {
    this.log('componentWillMount()')
  }

  componentDidMount () {
    this.log('componentDidMount()')
  }

  componentWillReceiveProps (nextProps) {
    this.log('componentWillReceiveProps(nextProps)')
  }

  shouldComponentUpdate (nextProps, nextState) {
    this.cycleNum++
    this.log('shouldComponentUpdate(nextProps, nextState)')
    return PureRenderMixin.shouldComponentUpdate.bind(this)(nextProps, nextState)
  }

  componentWillUpdate (nextProps, nextState) {
    this.log('componentWillUpdate(nextProps, nextState)')
  }

  componentDidUpdate (prevProps, prevState) {
    this.log('componentDidUpdate(prevProps, prevState)')
  }

  render () {
    this.log('render()')
    return this.actualRender()
  }

  componentWillUnmount () {
    this.log('componentWillUnmount()')
  }
}
