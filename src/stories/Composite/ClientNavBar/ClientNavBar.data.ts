interface NavLink {
  title: string,
  href?: string,
}

interface ClientNavBar_NavDropdown extends NavLink {
  "description"?: string,
  "cols"?: number,
  "rows"?: number,
  "img"?: string
}

interface ClientNavBar_NavItem extends NavLink {
  "grid-cols"?: 1 | 2,
  "dropdown"?: ClientNavBar_NavDropdown[]
}

const Data: ClientNavBar_NavItem[] = [
  {
    "title": "Perusahaan",
    "href": "/about"
  },
  {
    "title": "Information",
    "grid-cols": 1,
    "dropdown": [
      {
        title: "Produk",
        href: "/",
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
    "grid-cols": 2,
    "dropdown": [
      {
        title: "PT. Patrick",
        href: "/",
        description: "Electronics, Lights, Visuals, Cameras, and Storage Devices.",
        rows: 3
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
