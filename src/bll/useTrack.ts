import { useEffect } from 'react'
import { getTrack } from '../dal/api'
import type { TrackDetailsResource } from '../dal/types'

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
