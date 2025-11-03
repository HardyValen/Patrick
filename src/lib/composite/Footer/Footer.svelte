<script>
  import { cn } from '$lib/utils.js';
  import { typographyVariants } from '$lib';
  import { debugConfig as dbg } from "$config";
  // import map from "$lib/assets/MapsPlaceholder.png";

  /** The "FooterLinkGroup" prop is optional, but follows this interface
   * FooterData type definition
   * @typedef {Object} FooterLinkGroup
   * @property {string} title - The title of the footer link group
   * @property {FooterLink} footerLinks
   *
   * FooterLink type definition
   * @typedef {Object} FooterLink
   * @property {string} title - footer link title
   * @property {string} href - footer link href
   */

  let {
    ref = $bindable(null),
		class: className,
    data: footerLinkGroups = [
      {
        title: "Shop Links",
        footerLinks: [
          { title: "Tokopedia", href: "https://www.tokopedia.com" },
          { title: "Lazada", href: "https://www.lazada.co.id" },
          { title: "Shopee", href: "https://shopee.co.id" },
          { title: "Blibli", href: "https://blibli.com" },
          { title: "Facebook Marketplace", href: "https://www.facebook.com/marketplace/"},
          { title: "Tiktok Shop", href: "https://www.tiktok.com/shop"}
        ]
      },
      {
        title: "Information",
        footerLinks: [
          { title: "Produk", href: "/" },
          { title: "Brand", href: "/" },
          { title: "Artikel", href: "/" },
          { title: "Tentang Kami", href: "/" },
        ]
      },
      {
        title: "Contact Us",
        footerLinks: [
          { title: "Instagram", href: "https://instagram.com" },
          { title: "Whatsapp", href: "#"},
          { title: "Email", href: "#" }
        ]
      }
    ],
    ...restProps
  } = $props()
</script>

<!--
  To-Do List:
    * Social Links (whatsapp, instagram, facebook, tiktok, twitter)
    * Company Profile / About Page
    * Address
    * Articles
    * Products
    * Sitemap? lol
-->

<footer
  bind:this={ref}
  class={cn(
    className
  )}
  {...restProps}
>
  <div
    class={cn(
      "w-full max-w-320 m-auto",
      "flex flex-col",
      "gap-8",
    )}
  >

    <!-- Company Address -->
    <div
      class={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      )}
    >
      <div class="flex flex-col gap-2">
        <span class={cn(
          typographyVariants({ variant: "link-footer-title", typeface: "serif" })
        )}>
          Vitesse
        </span>
        <span class={cn(
          "text-sm md:text-md",
          "text-(--link-primary-foreground) text-medium"
        )}>
          Mall Mangga Dua, Jl. Mangga Dua Raya No. 7B, RT.1/RW.12, Mangga Dua Sel., Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10730
        </span>
      </div>
      {#if !dbg.enabled}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.960445948071!2d106.82259213786135!3d-6.136016948430678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f8cae40bd5%3A0xbd650a77e9a38f0!2sVitesse!5e0!3m2!1sen!2sid!4v1759216369307!5m2!1sen!2sid" style="border:0;" class="w-full max-w-160 h-full min-h-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="vitesse-map"></iframe>
      {/if}
    </div>

    <!-- Footer Group Links -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
      {#each footerLinkGroups as footerLinkGroup}
        <div class="flex flex-col items-start gap-2">
          <span
            class={cn(
            typographyVariants({variant: "link-footer-title", typeface: "serif"}),
            "pb-1"
            )}
          >
            {footerLinkGroup.title}
          </span>
          {#each footerLinkGroup.footerLinks as footerLink}
            <a
              class={cn(
                typographyVariants({variant:"link-footer-primary"})
              )}
              href={footerLink.href}
            >
              {footerLink.title}
            </a>
          {/each}
        </div>
      {/each}
    </div>

    <!-- Copyright Notice -->
    <div
      class={cn(
        "text-center",
        "w-full"
      )}
    >
      <span class={cn(
        "text-primary",
        typographyVariants({variant: "xsmall"})
      )}>
        © 2025 Vitesse. All Rights Reserved.
      </span>
    </div>

  </div>
</footer>
