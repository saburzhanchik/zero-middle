import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import { useState } from 'react'

export const MainPage = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  const handleTrackSelect = (trackId: string) => setSelectedTrackId(trackId)

  return (
    <main>
      <PageTitle value="MusicFun Player" />
      <ResetButton />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <Playlist
          selectedTrackId={selectedTrackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails selectedTrackId={selectedTrackId} />
      </div>
    </main>
  )
}
