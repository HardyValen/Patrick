interface ClientProductsSummaryData {
  id: string,
  title: string,
  subtitle?: string,
  linkText?: string
  img?: string
}

const Data: ClientProductsSummaryData[] = [
  {
    id: "nisi-group/jetmag-pro",
    title: "Jetmag Pro",
    subtitle: "Snap, shoot, and create without the hassle.",
    img: "/assets/images/Nisi_Group_JetMagPro_tmb.png",
  },
  {
    id: "nisi-group/circular-filters",
    title: "Circular Filters",
    subtitle: "Fast, lightweight, and always ready. Freedom in your pocket.",
    img: "/assets/images/Nisi_Group_CircularFilter_tmb.png",
  },
  {
    id: "nisi-group/square-filters",
    title: "Square Filters",
    subtitle: "Master the light, shape the story – precision tools for creative control",
    img: "/assets/images/Nisi_Group_SquareFilter_tmb.png",
  },
  {
    id: "nisi-group/cinema",
    title: "Cinema",
    subtitle: "Shoot it right the first time – flawless color and clarity with no post needed.",
    img: "/assets/images/Nisi_Group_CinemaFilter_tmb.png",
  },
  {
    id: "nisi-group/lenses",
    title: "Lenses",
    subtitle: "Cinematic perfection – stunning clarity, zero focus breathing, and true-to-life color without post-production hassle.",
    img: "/assets/images/Nisi_Group_Athena_tmb.png",
  },
  {
    id: "nisi-group/accessories",
    title: "Accessories",
    subtitle: "Adapters, filter holders, and assortment of camera accessories.",
    img: "/assets/images/Nisi_Group_Acc_tmb.png",
  },
]

export default Data;
