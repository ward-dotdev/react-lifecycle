import PureRenderMixin from 'react-addons-pure-render-mixin'

export function logWithName () {
  const [str, ...args] = arguments
  if (this && this.props) {
    if (typeof this.props.log === 'boolean' ? this.props.log : true) {
      console.log(`${this.constructor.name || 'Unknown'} | ${str}`, ...args)
    }
  } else {
    console.log(`Unknown | ${str}`, ...args)
  }
}

export function shouldComponentUpdate (instance, nextProps, nextState) {
  return PureRenderMixin.shouldComponentUpdate.bind(instance)(nextProps, nextState)
}
