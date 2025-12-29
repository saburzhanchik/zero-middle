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
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

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
      <button
        type="button"
        onClick={() => setSelectedTrackId(null)}
      >
        Reset selection
      </button>
      {tracks === null && <p>Loading...</p>}
      {tracks?.length === 0 && <p>No tracks</p>}
      <ul>
        {tracks?.map((track: Track) => (
          <li
            key={track.id}
            style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
            onClick={() => setSelectedTrackId(track.id)}
          >
            <div>{track.attributes.title}</div>
            <audio
              src={track.attributes.attachments[0].url}
              controls
            ></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
