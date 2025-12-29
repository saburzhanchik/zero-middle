import type { Track } from '../../dal/types'
import { useTracks } from '../../bll/useTracks'

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
