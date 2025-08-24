interface ClientCarousel_Item {
  title?: string,
  img: string,
  subtitle?: string,
  orientation?: "left" | "right" | "center",
  button?: ClientCarousel_Button
}

interface ClientCarousel_Button {
  title: string,
  href: string
}

const Data : ClientCarousel_Item[] = [
  {
    title: "Carousel 1",
    // img: "https://i.ibb.co.com/fVPK7zCF/ipad-8809761-1280.webp",
    img: "https://placehold.co/300x200?text=Placeholder",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    orientation: "left",
    button: {
      title: "Button Title",
      href: "link"
    }
  },
  {
    title: "Carousel 2",
    // img: "https://i.ibb.co.com/TxNt3K5K/samsung-4721542-1280.webp",
    img: "https://placehold.co/300x200?text=Placeholder_2",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    orientation: "center",
    button: {
      title: "Button Title",
      href: "link"
    }
  },
  {
    title: "Carousel 3",
    // img: "https://i.ibb.co.com/cK46ZQ3c/sony-a7-7517301-1280.webp",
    img: "https://placehold.co/300x200?text=Placeholder_3",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    orientation: "right",
  },
]

export default Data;
