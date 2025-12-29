import { useEffect, useState } from 'react'
import type { Track } from '../../types'

interface Props {
  selectedTrackId: string | null
  onTrackSelect: (trackId: string) => void
}

export const Playlist = ({ selectedTrackId, onTrackSelect }: Props) => {
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
      {tracks === null && <p>Loading...</p>}
      {tracks?.length === 0 && <p>No tracks</p>}

      <ul>
        {tracks?.map((track: Track) => (
          <li
            key={track.id}
            style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
            onClick={() => onTrackSelect(track.id)}
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
