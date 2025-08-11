<script>
  import Button from "$sb/Example/Button/Button.svelte";
  import DarkMode from "$sb/Composite/DarkMode/DarkMode.svelte";
  import ClientCarousel from "$sb/Composite/ClientCarousel/ClientCarousel.svelte";
  import { cn } from "$lib/utils.js";

  /**
   * @type {CarouselData} carouselData
   * @see ClientCarousel
   */

  const carouselData = [
    {
      title: "Carousel 1",
      img: "Gambar",
      subtitle: "subtitle carousel 1",
      button: {
        title: "Button Title",
        href: "link"
      }
    },
    {
      title: "Carousel 1",
      img: "Gambar",
      subtitle: "subtitle carousel 1",
      button: {
        title: "Button Title",
        href: "link"
      }
    },
    {
      title: "Carousel 1",
      img: "Gambar",
      subtitle: "subtitle carousel 1",
      button: {
        title: "Button Title",
        href: "link"
      }
    }
  ];
</script>

<div>
  <ClientCarousel data={carouselData} class={"w-full bg-slate-400 p-5"}/>
</div>
