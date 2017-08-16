export const fetchSongs = async () => {
  const songs = await new Promise(resolve => setTimeout(() => {
    resolve([
      {
        id: 'u2sH1bUMWyU',
        title: 'googlekhrome​',
        artist: 'Knxwledge',
        highlight: 40
      },

      {
        id: 'MWXPMwcmC14',
        title: 'Awakening',
        artist: 'DJ Paypal'
      },
      {
        id: 'BcyFJLrBVhA',
        title: 'Uber Everywhere',
        artist: 'Madeintyo',
        highlight: 98
      },
      {
        id: 'A_dc7ljeZag',
        title: 'Redux',
        artist: '2562',
        highlight: 176
      }
    ])
  }), 2500)

  return songs
}
