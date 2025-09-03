interface ClientProductsData {
  id: string,
  title: string,
  publishDate: string,
  content: string,
  subtitle?: string,
  showSubtitle?: boolean
  linkText?: string
  img?: string,
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
    id: "1",
    title: "The Title of The Product lipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi.",
    showSubtitle: true,
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/600x800?text=Placeholder",
    content: fakerContent,
    publishDate: new Date(2024, 4, 30).toString(),
    tags: ["products", "camera", "lens"],
    nextId: "2",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
    content: fakerContent,
    publishDate: new Date(2022, 1, 10).toString(),
    nextId: "3",
    prevId: "1",
  },
  {
    id: "3",
    title: "Judul",
    subtitle: "subjudul",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
    content: fakerContent,
    publishDate: new Date(2024, 12, 15).toString(),
    nextId: "4",
    prevId: "2",
  },
  {
    id: "4",
    title: "Card 4",
    subtitle: "subtitle",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
    content: fakerContent,
    publishDate: new Date(2025, 9, 1).toString(),
    nextId: "5",
    prevId: "3",
  },
  {
    id: "5",
    title: "Card 5",
    subtitle: "subtitle",
    linkText: "Baca selengkapnya",
    img: "https://placehold.co/300x200?text=Placeholder",
    content: fakerContent,
    publishDate: new Date(2024, 2, 29).toString(),
    nextId: "6",
    prevId: "4",
  },
  {
    id: "6",
    title: "Card 6",
    subtitle: "subtitle",
    img: "https://placehold.co/300x200?text=Placeholder",
    content: fakerContent,
    publishDate: new Date(2025, 1, 1).toString(),
    nextId: "1",
    prevId: "5",
  },
]

export default Data;
