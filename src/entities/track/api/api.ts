export const getTrack = (trackId: string | null) => {
  return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
    headers: {
      'api-key': import.meta.env.VITE_API_KEY,
    },
  }).then((res) => res.json())
}

export const getTracks = () => {
  return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: {
      'api-key': import.meta.env.VITE_API_KEY,
    },
  }).then((res) => res.json())
}
