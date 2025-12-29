import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import { useTrackSelection } from '../../bll/useTrackSelection'
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
