import * as CPC from "./ClientProductContent";

interface ClientProductsData {
  id: string,
  title: string,
  publishDate: string,
  content: string,
  subtitle?: string,
  img?: string,
  layout?: "full" | "half"
  tags?: string[],
  nextId?: string,
  prevId?: string,
}

const Data: ClientProductsData[] = [
  {
    id: "nisi-group/jetmag-pro",
    title: "Jetmag Pro",
    subtitle: "Snap, shoot, and create without the hassle.",
    img: "/assets/images/Nisi_Group_JetMagPro_tmb.png",
    content: "",
    publishDate: new Date(2024, 4, 30).toString(),
    tags: ["products", "camera", "lens"],
    nextId: "nisi-group/circularfilter",
  },
  {
    id: "nisi-group/circularfilter",
    title: "Circular Filters",
    subtitle: "Fast, lightweight, and always ready. Freedom in your pocket.",
    img: "/assets/images/Nisi_Group_CircularFilter_tmb.png",
    content: "",
    publishDate: new Date(2022, 1, 10).toString(),
    nextId: "nisi-group/square-filters",
    prevId: "nisi-group/jetmag-pro",
  },
  {
    id: "nisi-group/square-filters",
    title: "Square Filters",
    subtitle: "Master the light, shape the story – precision tools for creative control",
    img: "/assets/images/Nisi_Group_SquareFilter_tmb.png",
    content: "",
    publishDate: new Date(2024, 12, 15).toString(),
    nextId: "nisi-group/cinema",
    prevId: "nisi-group/circularfilter",
  },
  {
    id: "nisi-group/cinema",
    title: "Cinema",
    subtitle: "Shoot it right the first time – flawless color and clarity with no post needed.",
    img: "/assets/images/Nisi_Group_CinemaFilter_tmb.png",
    content: CPC.NisiGroup.Cinema,
    publishDate: new Date(2025, 9, 1).toString(),
    nextId: "nisi-group/lenses",
    prevId: "nisi-group/square-filters",
  },
  {
    id: "nisi-group/lenses",
    title: "Lenses",
    subtitle: "Cinematic perfection – stunning clarity, zero focus breathing, and true-to-life color without post-production hassle.",
    img: "/assets/images/Nisi_Group_Athena_tmb.png",
    content: CPC.NisiGroup.Lenses,
    publishDate: new Date(2024, 2, 29).toString(),
    nextId: "nisi-group/accessories",
    prevId: "nisi-group/cinema",
  },
  {
    id: "nisi-group/accessories",
    title: "Accessories",
    subtitle: "Adapters, filter holders, and assortment of camera accessories.",
    img: "/assets/images/Nisi_Group_Acc_tmb.png",
    content: "",
    publishDate: new Date(2025, 1, 1).toString(),
    prevId: "nisi-group/lenses",
  },
]

export default Data;
