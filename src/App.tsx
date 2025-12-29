import './App.css'
import { useState } from 'react'

type Track = {
  id: number
  title: string
  url: string
}

export const App = () => {
  const [tracks, setTracks] = useState<Track[]>([
    {
      id: 1,
      title: 'MusicFun Soundtrack',
      url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
    },
    {
      id: 2,
      title: 'MusicFun Soundtrack – Instrumental',
      url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
    },
  ])

  return (
    <>
      <h1>MusicFun Player</h1>
      {tracks === null && <p>Loading...</p>}
      {tracks.length === 0 && <p>No tracks</p>}
      <ul>
        {tracks.map((track: Track) => (
          <li key={track.id}>
            <div>{track.title}</div>
            <audio src={track.url} controls></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
