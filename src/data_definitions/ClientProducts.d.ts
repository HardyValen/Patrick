export interface ClientProductsData {
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
