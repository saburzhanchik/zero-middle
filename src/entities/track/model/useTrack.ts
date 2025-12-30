import { useEffect } from 'react'
import { getTrack } from '../api/api'
import type { TrackDetailsResource } from './types'

export const useTrack = (
  selectedTrackId: string | null,
  selectedTrack: TrackDetailsResource | null,
  setSelectedTrack: (track: TrackDetailsResource) => void,
) => {
  useEffect(() => {
    if (!selectedTrackId) return
    getTrack(selectedTrackId).then((json) => setSelectedTrack(json.data))
  }, [selectedTrackId])

  const isInactive = selectedTrack?.id !== selectedTrackId

  return { isInactive }
}
