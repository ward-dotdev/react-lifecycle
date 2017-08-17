export default function log (str) {
  if (this && this.constructor) {
    console.log(`${this.constructor.name || 'Unknown'} (${this.cycleNum}) %c${str}`, 'font-weight: bold')
  } else {
    console.log(str)
  }
}
