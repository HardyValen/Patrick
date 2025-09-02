interface ClientProductsSummaryData {
  id: string,
  title: string,
  subtitle?: string,
  linkText?: string
  img?: string
}

const Data: ClientProductsSummaryData[] = [
  {
    id: "1",
    title: "The Title of The Product",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis.",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
  },
  {
    id: "3",
    title: "Judul",
    subtitle: "subjudul",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
  },
  {
    id: "4",
    title: "Card 4",
    subtitle: "subtitle",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
  },
  {
    id: "5",
    title: "Card 5",
    subtitle: "subtitle",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
  },
  {
    id: "6",
    title: "Card 6",
    subtitle: "subtitle",
    img: "https://placehold.co/300x200?text=Placeholder",
  },
]

export default Data;
