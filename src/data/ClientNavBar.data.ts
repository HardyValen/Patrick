import { tv } from "tailwind-variants";
import { cn } from "$lib/utils";

// Variants
const navbarDropdownContainerVariants = tv({
  base: "grid p-2",
  variants: {
    variant: {
      single: "grid-cols-1 min-w-40",
      double: "grid-cols-2 min-w-80",
      singleDesc: "grid-cols-1 min-w-80",
      doubleDesc: "grid-cols-2 min-w-120"
    },
  },
  defaultVariants: {
    variant: "single"
  }
});

interface NavLink {
  title: string,
  href?: string,
  classes?: string
}

interface ClientNavBar_NavDropdown extends NavLink {
  "description"?: string,
  "cols"?: number,
  "rows"?: number,
  "img"?: string
}

interface ClientNavBar_NavItem extends NavLink {
  "dropdown"?: ClientNavBar_NavDropdown[]
}

const Data: ClientNavBar_NavItem[] = [
  {
    "title": "Perusahaan",
    "href": "/about"
  },
  {
    "title": "Information",
    "classes": cn(
      navbarDropdownContainerVariants({variant: "singleDesc"})
    ),
    "dropdown": [
      {
        title: "Produk",
        href: "/products",
        description: "Jelajah inventaris toko berdasarkan jenis produk seperti kamera, lampu, dst."
      },
      {
        title: "Brand",
        href: "/",
        description: "Jelajah barang dagangan PT Patrick disortir berdasarkan brand."
      },
      {
        title: "Artikel",
        href: "/",
        description: "Ikuti perkembangan terkini produk yang anda incar."
      },
      {
        title: "Tentang Kami",
        href: "/",
        description: "Pelajari toko kami dan raih kesempatan bekerja sama antara distributor dan pengecer."
      }
    ]
  },
  {
    "title": "Contact",
    "classes": cn(
      navbarDropdownContainerVariants(),
      "grid-cols-[200px_100px]"
    ),
    "dropdown": [
      {
        title: "PT. Patrick",
        href: "/",
        description: "Electronics, Lights, Visuals, Cameras, and Storage Devices.",
        classes: "row-span-3"
      },
      {
        title: "Instagram",
        href: "https://instagram.com/",
      },
      {
        title: "Whatsapp",
        href: "#",
      },
      {
        title: "Email",
        href: "#",
      }
    ]
  }
]

export default Data
