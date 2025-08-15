<script>
  import { cn } from '$lib/utils.js';
  import { typographyVariants } from '$lib/typographyVariants';
  import map from "$lib/assets/MapsPlaceholder.png";

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
    ]
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

<div class={cn(
  "bg-background",
  "py-8",
  "px-(--px-lpage) md:px-(--px-lpage-md) xl:px-(--px-lpage-xl)",
  "flex flex-col",
  "gap-8"
)}>
  <!-- Company Address -->
  <div class={cn(
    "grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
  )}>
    <div class="flex flex-col gap-2">
      <span class={cn(
        typographyVariants({ variant: "link-footer-title", typeface: "serif" })
      )}>
        PT. Patrick
      </span>
      <span class={cn(
        typographyVariants({variant: "p"}),
        "text-(--link-primary-foreground) text-medium"
      )}>
        Merdeka Square, Jakarta, Jalan Lapangan Monas, Gambir, Central Jakarta City, Jakarta 10110
      </span>
    </div>
    <a href="https://maps.app.goo.gl/KwEyUpK57UoHrYiQ8" target="
      _blank" class={cn(
        "md:justify-self-end"
      )}>
      <img
        src={map}
        alt="MONAS: Merdeka Square, Jakarta, Jalan Lapangan Monas, Gambir, Central Jakarta City, Jakarta 10110"
        class="md:max-w-75"
      />
    </a>
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
  <div class={cn(
    "text-center",
    "w-full"
  )}>
    <span class={cn(
      "text-primary",
      typographyVariants({variant: "xsmall"})
    )}>
      &copy;2025 Patrick. All Rights Reserved.
    </span>
  </div>
</div>
