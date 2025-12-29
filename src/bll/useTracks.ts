import type { Track } from '../dal/types'
import { useEffect, useState } from 'react'
import { getTracks } from '../dal/api'

export const useTracks = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    getTracks().then((json) => setTracks(json.data))
  }, [])

  return { tracks }
}
