import type { TrackDetailsResource } from '../types'
import { useState } from 'react'

export const useTrackSelection = () => {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  const handleTrackSelect = (trackId: string) => setSelectedTrackId(trackId)

  const handleReset = () => {
    setSelectedTrackId(null)
    setSelectedTrack(null)
  }

  return {
    selectedTrack,
    selectedTrackId,
    handleTrackSelect,
    handleReset,
    setSelectedTrack
  }
}
