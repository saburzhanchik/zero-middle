import type { Track } from '../../dal/types'
import { useTracks } from '../../bll/useTracks'
import { TrackItem } from '../TrackItem'

interface Props {
  selectedTrackId: string | null
  onTrackSelect: (trackId: string) => void
}

export const Playlist = ({ selectedTrackId, onTrackSelect }: Props) => {
  const { tracks } = useTracks()

  return (
    <>
      {tracks === null && <p>Loading...</p>}
      {tracks?.length === 0 && <p>No tracks</p>}

      <ul>
        {tracks?.map((track: Track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              onTrackSelect={onTrackSelect}
            />
          )
        })}
      </ul>
    </>
  )
}
