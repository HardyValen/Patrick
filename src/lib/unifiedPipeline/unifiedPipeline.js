import { transformerCopyButton } from '@rehype-pretty/transformers';

import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, {defaultSchema} from 'rehype-sanitize';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';

const unifiedPipeline = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSanitize, {
    ...defaultSchema,
    tagNames: [...defaultSchema.tagNames, 'u'],
    attributes: {
      ...defaultSchema.attributes,
      div: [...defaultSchema.attributes.div, 'className']
    }
  })
  .use(rehypeStringify, { allowDangerousHtml: true })
  .use(rehypeUnwrapImages)
  .use(rehypeExternalLinks, {target: "_blank", rel: ['noreferrer', 'noopener', 'nofollow']})
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['link-hover'] } })
  .use(rehypePrettyCode, {
    theme: 'github-dark',
    transformers: [
      transformerCopyButton({
        visibility: 'hover',
        feedbackDuration: 3_000,
      }),
    ],
  });

export default unifiedPipeline;
