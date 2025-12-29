import { useState } from 'react'

export const ResetButton = () => {
  const [_, setSelectedTrackId] = useState<string | null>(null)

  return (
    <button
      type="button"
      onClick={() => setSelectedTrackId(null)}
    >
      Reset selection
    </button>
  )
}
