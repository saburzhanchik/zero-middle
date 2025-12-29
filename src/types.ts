export type Attachment = {
  url: string
}

export type TrackAttributes = {
  title: string
  attachments: Attachment[]
}

export type TrackDetailsAttributes = {
  title: string
  lyrics: string | null
}

export type Track = {
  id: string
  attributes: TrackAttributes
}

export type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}
