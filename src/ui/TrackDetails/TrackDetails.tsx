import type { TrackDetailsResource } from '../../dal/types'
import styles from './TrackDetails.module.css'
import clsx from 'clsx'
import { useTrack } from '../../bll/useTrack'

interface Props {
  selectedTrackId: string | null
  selectedTrack: TrackDetailsResource | null
  setSelectedTrack: (data: TrackDetailsResource) => void
}

export const TrackDetails = ({ selectedTrackId, selectedTrack, setSelectedTrack }: Props) => {
  const { isInactive } = useTrack(selectedTrackId, selectedTrack, setSelectedTrack)

  return (
    <div>
      <h2>Track details</h2>
      {!selectedTrackId && <p>No selected track</p>}
      {selectedTrackId && !selectedTrack && <p>Loading...</p>}
      {selectedTrack && (
        <>
          <div
            className={clsx({
              [styles.inactive]: isInactive,
            })}
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
