import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import { useTrackSelection } from '../../hooks/useTrackSelection'

export const MainPage = () => {
  const {
    selectedTrack,
    selectedTrackId,
    handleTrackSelect,
    handleReset,
    setSelectedTrack,
  } = useTrackSelection()

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
