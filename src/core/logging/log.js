export default function log (str) {
  console.log(`${this.constructor.name || 'Unknown'} (${this.cycleNum}) %c${str}`, 'font-weight: bold')
}
