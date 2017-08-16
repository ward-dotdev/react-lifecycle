import React, {Component} from 'react'
import {logWithName, shouldComponentUpdate} from '../core/utils'

export default class ComponentGallery extends Component {
  constructor (props) {
    super(props)
    this.log = logWithName.bind(this)
    this.log('1 | constructor')
  }
  componentWillMount () {
    this.log('2 | componentWillMount')
  }
  componentDidMount () {
    this.log('3 | componentDidMount')
  }
  componentWillReceiveProps (nextProps) {
    this.log('4 | componentWillReceiveProps')
  }
  shouldComponentUpdate (nextProps, nextState) {
    this.log('5 | componentWillReceiveProps')

    return shouldComponentUpdate(this, nextProps, nextState)
  }
  componentWillUpdate (nextProps, nextState) {
    this.log('6 | shouldComponentUpdate')
  }
  componentDidUpdate (prevProps, prevState) {
    this.log('7 | componentDidUpdate')
  }
  componentWillUnmount () {
    this.log('8 | componentWillUnmount')
  }
  setActive = i => {
    this.log(`=> setActive ${i}`)

    this.setState({active: i})
  }
  render () {
    this.log('render')

    return <div style={{backgroundColor: '#ddd'}} {...this.props} />
  }
}
