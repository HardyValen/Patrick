interface ClientCarousel_Item {
  title?: string,
  img?: string,
  video?: ClientCarousel_Video,
  subtitle?: string,
  orientationX?: "left" | "right" | "center",
  orientationY?: "top" | "bottom" | "center",
  button?: ClientCarousel_Button
}

interface ClientCarousel_Button {
  title: string,
  href: string
}

interface ClientCarousel_Video {
  link: string,
  type: string
}

const Data : ClientCarousel_Item[] = [
  {
    title: "JetMag Pro: Lock Fast, Shoot Smart",
    video: {
      link: "/assets/videos/Nisi_jetmag_pro.mp4",
      type: "video/mp4"
    },
    subtitle: "Magnetic. Ultra-thin. Mechanically secure. Swap filters in seconds - no vignetting, no compromise.",
    orientationX: "left",
    orientationY: "bottom",
  },
  {
    title: "ATHENA PRIME: Full-Frame Precision. Zero Compromise.",
    video: {
      link: "/assets/videos/Nisi_athena_vid.mp4",
      type: "video/mp4"
    },
    subtitle: "Matched primes. Ultra-fast apertures. No focus breathing. Built for filmmakers who demand control and clarity.",
    orientationX: "left",
    orientationY: "bottom",
  },
  {
    title: "SWIFT — Snap. Stack. Shoot.",
    video: {
      link: "/assets/videos/Nisi_swift.mp4",
      type: "video/mp4"
    },
    subtitle: "1-second detachment. Rock-solid hold. Endless creative combos.",
    orientationX: "left",
    orientationY: "bottom",
  },
]

export default Data;
