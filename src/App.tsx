import './App.css'
import { useEffect, useState } from 'react'

type Attachment = {
  url: string
}

type TrackAttributes = {
  title: string
  attachments: Attachment[]
}

type TrackDetailsAttributes = {
  title: string
  lyrics: string | null
}

type Track = {
  id: string
  attributes: TrackAttributes
}

type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}

export const App = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((json) => setTracks(json.data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) return

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((json) => setSelectedTrack(json.data))
  }, [selectedTrackId])

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
      <div style={{ display: 'flex', columnGap: '30px' }}>
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
        <div>
          <h2>Track details</h2>
          {!selectedTrackId && <p>No selected track</p>}
          {selectedTrackId && !selectedTrack && <p>Loading...</p>}
          {selectedTrack && (
            <>
              <div
                style={{
                  color: selectedTrack.id !== selectedTrackId ? '#777' : 'inherit',
                  transition: 'color .2s ease',
                }}
              >
                <h3>{selectedTrack.attributes.title}</h3>
                <div>
                  <h4>Lyrics</h4>
                  <p>{selectedTrack.attributes.lyrics || 'No lyrics'}</p>
                </div>
              </div>
              {selectedTrack.id !== selectedTrackId && <p>Loading...</p>}
            </>
          )}
        </div>
      </div>
    </>
  )
}
