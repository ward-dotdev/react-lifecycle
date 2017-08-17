import React from 'react'
import YouTube from 'react-youtube'
import {Component} from '../core/logging'
import {fetchSongs} from '../core/api'

export default class SongGallery extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: null,
      songs: [],
      loading: true
    }
  }
  componentDidMount () {
    this.log('componentDidMount()')

    fetchSongs().then(songs => {
      this.log(`=> setSongs`, songs)

      this.setState({
        loading: false,
        songs
      })
    })
  }
  setActive = i => {
    this.log('=> setActive', i)

    this.setState({active: i})
  }
  renderSongButton = (song, i) => (
    <button onClick={() => { this.setActive(i) }} key={i}>
      {song.artist} - {song.title}
    </button>
  )
  renderContent = (msg) => {
    const video = this.state.songs[this.state.active]

    return (
      <div>
        {this.state.songs.map(this.renderSongButton)}
        {typeof this.state.active === 'number'
          ? <YouTube videoId={video.id} opts={{
            playerVars: {
              autoplay: 1,
              start: video.highlight
            }
          }} />
          : <p>{msg}</p>}
      </div>
    )
  }
  render () {
    this.log('render()')

    return (
      <div style={{backgroundColor: '#ddd', marginTop: '1em'}}>
        <h2>Song Gallery</h2>
        {this.renderContent(this.state.loading ? 'Loading' : 'Select a song')}
      </div>
    )
  }
}
