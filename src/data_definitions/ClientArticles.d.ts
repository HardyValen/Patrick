export interface ClientArticles_Item {
  id: string,
  title: string,
  publishDate: string,
  content: string,
  img?: string,
  layout?: "full" | "half",
  tags: string[],
  nextId?: string,
  prevId?: string,
}
