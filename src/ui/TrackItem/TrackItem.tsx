import type { Track } from '../../dal/types'

interface Props {
  track: Track
  isSelected: boolean
  onTrackSelect: (trackId: string) => void
}

export const TrackItem = ({ track, isSelected, onTrackSelect }: Props) => {
  return (
    <li
      style={{ border: `1px solid ${isSelected ? 'orange' : 'transparent'}` }}
      onClick={() => onTrackSelect(track.id)}
    >
      <div>{track.attributes.title}</div>
      <audio
        src={track.attributes.attachments[0].url}
        controls
      ></audio>
    </li>
  )
}
