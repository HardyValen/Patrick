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

const fakerContent = [
  `
  <div class="overflow-auto">

  | test | test | test | test |
  |:-----|:----:|------|-----:|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|
  |somethingsomething__|something__|something__ lipsum|somethingsomething_|

  </div>

  # header 1
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  # header 1
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ## header 2
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ### header 3
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  #### header 4
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ##### header 5
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  ###### header 6
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  <u>underline</u> _italic_ __bold__ ~~strikethrough~~

  In the 1840s,
  [Urbain Le Verrier](https://wikipedia.org/wiki/Urbain_Le_Verrier)
  used Newtonian mechanics to predict the position of the
  then-undiscovered planet
  [Neptune](https://wikipedia.org/wiki/Neptune)
  after analyzing perturbations in the orbit of
  [Uranus](https://wikipedia.org/wiki/Uranus).

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.

  www.google.com

  ***

  ![Tux, the Linux mascot](https://placehold.co/1500x1500?text=Placeholder)

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.
  `
].join("\n");

const Data: ClientProductsData[] = [
  {
    id: "nisi-group/jetmag-pro",
    title: "Jetmag Pro",
    subtitle: "Snap, shoot, and create without the hassle.",
    img: "/assets/images/Nisi_Group_JetMagPro_tmb.png",
    content: fakerContent,
    publishDate: new Date(2024, 4, 30).toString(),
    tags: ["products", "camera", "lens"],
    nextId: "nisi-group/circularfilter",
  },
  {
    id: "nisi-group/circularfilter",
    title: "Circular Filters",
    subtitle: "Fast, lightweight, and always ready. Freedom in your pocket.",
    img: "/assets/images/Nisi_Group_CircularFilter_tmb.png",
    content: fakerContent,
    publishDate: new Date(2022, 1, 10).toString(),
    nextId: "nisi-group/square-filters",
    prevId: "nisi-group/jetmag-pro",
  },
  {
    id: "nisi-group/square-filters",
    title: "Square Filters",
    subtitle: "Master the light, shape the story – precision tools for creative control",
    img: "/assets/images/Nisi_Group_SquareFilter_tmb.png",
    content: fakerContent,
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
    content: fakerContent,
    publishDate: new Date(2024, 2, 29).toString(),
    nextId: "nisi-group/accessories",
    prevId: "nisi-group/cinema",
  },
  {
    id: "nisi-group/accessories",
    title: "Accessories",
    subtitle: "Adapters, filter holders, and assortment of camera accessories.",
    img: "/assets/images/Nisi_Group_Acc_tmb.png",
    content: fakerContent,
    publishDate: new Date(2025, 1, 1).toString(),
    prevId: "nisi-group/lenses",
  },
]

export default Data;
