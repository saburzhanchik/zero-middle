import type { Track } from '../types'
import { useEffect, useState } from 'react'
import { getTracks } from '../api'

export const useTracks = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    getTracks().then((json) => setTracks(json.data))
  }, [])

  return { tracks }
}
