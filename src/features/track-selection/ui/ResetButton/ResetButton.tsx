interface Props {
  onReset: () => void
  setSelectedTrack: () => void
}

export const ResetButton = ({ onReset, setSelectedTrack }: Props) => {
  const handleReset = () => {
    onReset()
    setSelectedTrack()
  }

  return (
    <button
      type="button"
      onClick={handleReset}
    >
      Reset selection
    </button>
  )
}
