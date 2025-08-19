<script>
  import Button from "$sb/Example/Button/Button.svelte";
  import { DarkMode, ClientCarousel } from "$composite"
  import { cn } from "$lib/utils.js";

  /**
   * @type {CarouselData} carouselData
   * @see ClientCarousel
   */

  const carouselData = [
    {
      title: "Carousel 1",
      img: "https://i.ibb.co.com/fVPK7zCF/ipad-8809761-1280.webp",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
      orientation: "left",
      button: {
        title: "Button Title",
        href: "link"
      }
    },
    {
      title: "Carousel 2",
      img: "https://i.ibb.co.com/TxNt3K5K/samsung-4721542-1280.webp",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
      orientation: "center",
      button: {
        title: "Button Title",
        href: "link"
      }
    },
    {
      title: "Carousel 3",
      img: "https://i.ibb.co.com/cK46ZQ3c/sony-a7-7517301-1280.webp",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
      orientation: "right",
    },
    // {
    //   title: "Reimu Hakurei",
    //   img: "https://live.staticflickr.com/8182/7974731700_739b768f6c_z.jpg",
    //   subtitle: "Waifu Patrick",
    //   orientation: "right",
    //   button: {
    //     title: "LETS GOO",
    //     href: "link"
    //   }
    // },
    // {
    //   title: "Carousel 5",
    //   img: "https://www.rotoscopers.com/wp-content/uploads/2016/11/usagi_drop-06-rin-daikichi-excited-happy-planting-tree.jpg",
    //   subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum pulvinar aliquet. Fusce egestas nisl id sodales convallis. Suspendisse tempor ultrices magna in placerat. Morbi turpis erat, pretium eget interdum tincidunt, varius ac nisi. Sed non turpis posuere, eleifend justo vestibulum, vehicula quam. Aenean porta justo cursus metus finibus, ac tempor ante euismod. Proin luctus nec est vitae dictum. Quisque sagittis tortor eget neque volutpat auctor. Integer sagittis commodo lectus, non vulputate turpis consequat id. Nullam mollis pretium mi, ut dictum leo viverra eu. Phasellus ut est neque.",
    //   orientation: "right",
    // },
  ];
</script>

<div>
  <ClientCarousel
    data={carouselData}
    opts={{
      loop: true
    }}
  />
</div>
