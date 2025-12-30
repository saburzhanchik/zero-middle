import type { Track } from '../../dal/types'
import styles from './TrackItem.module.css'
import clsx from 'clsx'

interface Props {
  track: Track
  isSelected: boolean
  onTrackSelect: (trackId: string) => void
}

export const TrackItem = ({ track, isSelected, onTrackSelect }: Props) => {
  return (
    <li
      className={clsx({
        [styles.track]: true,
        [styles.active]: isSelected,
      })}
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
