import React, {Component} from 'react'
import YouTube from 'react-youtube'
import {logWithName, shouldComponentUpdate} from '../core/utils'
import {fetchSongs} from '../core/api'

export default class SongGallery extends Component {
  constructor (props) {
    super(props)
    this.log = logWithName.bind(this)
    this.log('1 | constructor')

    this.state = {
      active: null,
      songs: [],
      loading: true
    }
  }
  componentWillMount () {
    this.log('2 | componentWillMount')
  }
  componentDidMount () {
    this.log('3 | componentDidMount')

    fetchSongs().then(songs => {
      this.log(`=> setSongs`, songs)

      this.setState({
        loading: false,
        songs
      })
    })
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
  renderSongButton = (song, i) => (
    <button onClick={() => { this.setActive(i) }} key={i}>
      {song.artist} - {song.title}
    </button>
  )
  render () {
    this.log('render')

    if (this.state.loading) {
      return <p>Loading</p>
    }

    const video = this.state.songs[this.state.active]

    return (
      <div style={{backgroundColor: '#ddd', marginTop: '1em'}}>
        {this.state.songs.map(this.renderSongButton)}
        {typeof this.state.active === 'number'
          ? <YouTube videoId={video.id} opts={{
            playerVars: {
              autoplay: 1,
              start: video.highlight
            }
          }} />
          : <p>Select a song</p>}
      </div>
    )
  }
}
