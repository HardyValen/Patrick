export interface ClientCarousel_Item {
  title?: string,
  img?: string,
  video?: ClientCarousel_Video,
  subtitle?: string,
  orientationX?: "left" | "right" | "center",
  orientationY?: "top" | "bottom" | "center",
  button?: ClientCarousel_Button
}

export interface ClientCarousel_Button {
  title: string,
  href: string
}

export interface ClientCarousel_Video {
  link: string,
  type: string
}
