export interface NavLink {
  title: string,
  href?: string,
  classes?: string
}

export interface ClientNavBar_NavDropdown extends NavLink {
  "description"?: string,
  "cols"?: number,
  "rows"?: number,
  "img"?: string
}

export interface ClientNavBar_NavItem extends NavLink {
  "dropdown"?: ClientNavBar_NavDropdown[]
}
