import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'

export const MainPage = () => {
  return (
    <main>
      <PageTitle />
      <ResetButton />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <Playlist />
        <TrackDetails />
      </div>
    </main>
  )
}
