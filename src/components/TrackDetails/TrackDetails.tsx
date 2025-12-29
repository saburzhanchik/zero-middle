import { useEffect } from 'react'
import type { TrackDetailsResource } from '../../types'

interface Props {
  selectedTrackId: string | null
  selectedTrack: TrackDetailsResource | null
  setSelectedTrack: (data: TrackDetailsResource) => void
}

export const TrackDetails = ({ selectedTrackId, selectedTrack, setSelectedTrack }: Props) => {
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
  )
}
