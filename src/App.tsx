import './App.css'
import { useEffect, useState } from 'react'

type Attachment = {
  url: string
}

type TrackAttributes = {
  title: string
  attachments: Attachment[]
}

type Track = {
  id: string
  attributes: TrackAttributes
}

export const App = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((json) => setTracks(json.data))
  }, [])

  return (
    <>
      <h1>MusicFun Player</h1>
      {tracks === null && <p>Loading...</p>}
      {tracks?.length === 0 && <p>No tracks</p>}
      <ul>
        {tracks?.map((track: Track) => (
          <li key={track.id}>
            <div>{track.attributes.title}</div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
