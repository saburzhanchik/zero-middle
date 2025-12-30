import { PageTitle } from '../../shared/ui/PageTitle'
import { ResetButton } from '../../features/track-selection/ui/ResetButton'
import { Playlist } from '../../entities/track/ui/Playlist'
import { TrackDetails } from '../../features/track-selection/ui/TrackDetails'
import { useTrackSelection } from '../../features/track-selection/model/useTrackSelection'
import styles from './MainPage.module.css'

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
      <div className={styles.mainContent}>
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
