const apiKey = import.meta.env.VITE_API_KEY
const headers: HeadersInit = {}

if (apiKey) {
  headers['api-key'] = apiKey
}

export const getTrack = async (trackId: string | null) => {
  const res = await fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
    headers: headers,
  })
  return await res.json()
}

export const getTracks = async () => {
  const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: headers,
  })
  return await res.json()
}
