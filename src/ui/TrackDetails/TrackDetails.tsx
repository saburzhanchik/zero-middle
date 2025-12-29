import { useEffect } from 'react'
import type { TrackDetailsResource } from '../../dal/types'
import { getTrack } from '../../dal/api'

interface Props {
  selectedTrackId: string | null
  selectedTrack: TrackDetailsResource | null
  setSelectedTrack: (data: TrackDetailsResource) => void
}

export const TrackDetails = ({ selectedTrackId, selectedTrack, setSelectedTrack }: Props) => {
  useEffect(() => {
    if (!selectedTrackId) return
    getTrack(selectedTrackId).then((json) => setSelectedTrack(json.data))
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
