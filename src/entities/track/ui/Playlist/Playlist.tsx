import type { Track } from '../../model/types'
import { useTracks } from '../../model/useTracks'
import { TrackItem } from '../../../../features/track-selection/ui/TrackItem'

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
