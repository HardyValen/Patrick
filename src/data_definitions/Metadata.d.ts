interface Metadata_Video {
  url: string,
  secure_url?: string,
  width?: string,
  height?: string,
  type?: string
}

interface Metadata_Image {
  url: string,
  secure_url?: string,
  width?: string,
  height?: string,
  type?: string,
  alt?: string
}

interface Metadata_Article {
  authors?: string[]
  published_time?: Date
  modified_time?: Date
  tags?: string[]
}
