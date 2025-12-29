import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import { useState } from 'react'
import type { TrackDetailsResource } from '../../types'

export const MainPage = () => {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  const handleTrackSelect = (trackId: string) => setSelectedTrackId(trackId)

  const handleReset = () => {
    setSelectedTrackId(null)
    setSelectedTrack(null)
  }

  return (
    <main>
      <PageTitle value="MusicFun Player" />
      <ResetButton
        onReset={handleReset}
        setSelectedTrack={handleReset}
      />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <Playlist
          selectedTrackId={selectedTrackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails
          selectedTrackId={selectedTrackId}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </div>
    </main>
  )
}
