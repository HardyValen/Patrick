## Runtimes
Node v22.14.0
Bun 1.2.19

## Branch exp-markdown
### The Essentials
unified
remark-rehype
remark-parse
rehype-stringify

### Prettify the markdown
- [x] rehype-slug
- [x] rehype-autolink-headings
- [x] rehype-pretty-code
- [x] @rehype-pretty/transformers
- [x] remark-gfm
- [x] rehype-raw
- [x] rehype-sanitize

### Content Validation
valibot

todo:
- [] Search Articles...?
- [x] Render the metadata for /products and /news slug.
- [x] Previous and next post
- [] Sidebar table of contents?
- [] Related posts based by tag on footer
- [x] export unified processor as utils.
- [x] build a unified remark-rehype pipeline for /products and /news

### List of Supported Markdown Elements
1. headers (not supporting h5 and h6)
  - h1
  - h2
  - h3
  - h4
  - h5
  - h6
2. paragraph (p)
3. image (img)
4. a (link)
5. list
  - ul
  - ol
  - li
6. blockquote
7. bold
8. italic
9. underline
10. strikethrough
11. line break with line

To be implemented later
1. Code Block with shiki and such other things
2. Test

Elements that are not in [github markdown spec](https://github.com/gjtorikian/html-pipeline/blob/a2e02ac/lib/html_pipeline/sanitization_filter.rb) will never be implemented.

### Pagination
first landing = no cursor.
1. +page.server.js
  * fetch all products metadata for suggestion search
  * fetch page 1 limit 15 of the products to be displayed 3x3
    * has hyper metadata
2. +page.js
  * first, prev, current (selected), next, and last buttons
  * search title (customizable primary key)
  * search tags
  * displays 15 items with 3x3
3. api/products/+server.js
  * handle retrieval of articles with handful of params:
