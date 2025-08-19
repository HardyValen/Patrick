<script module>
  // import { cn } from "$lib/utils.js";
	import { tv } from "tailwind-variants";

	export const typographyVariants = tv({
	  base: "transition-all",
		variants: {
		  variant: {
				h1: "text-4xl font-extrabold tracking-tight text-balance scroll-m-20",
				h2: "text-3xl font-semibold tracking-tight first:mt-0 text-balance scroll-m-20",
				h3: "text-2xl font-semibold tracking-tight text-balance scroll-m-20",
				h4: "text-xl font-semibold tracking-tight text-balance scroll-m-20",
				p: "leading-7",
				p2: "leading-7 [&:not(:first-child)]:mt-6",
				blockquote: "mt-6 border-l-2 pl-6 italic",
				list: "my-6 ml-6 list-disc [&>li]:mt-2",
				inlineCode: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				lead: "text-muted-foreground text-xl",
				large: "text-lg font-semibold",
				small: "text-sm leading-none font-medium",
				xsmall: "text-xs leading-none font-medium",
				muted: "text-muted-foreground text-sm",
				link: "font-medium text-blue-600 dark:text-blue-500 hover:underline",

				// Footer Fonts
				"link-footer-primary": "text-sm tracking-wide hover:underline text-(--link-primary-foreground) hover:text-(--link-primary-foreground-hover) cursor-pointer",

				"link-footer-secondary": "text-sm tracking-wide hover:underline text-(--link-secondary-foreground) hover:text-(--link-secondary-foreground-hover) cursor-pointer",

				"link-footer-title": "uppercase font-extrabold text-xs tracking-widest",

				// Header Nav Links
				"header-navbar-title": "text-[14px] font-bold text-accent-foreground",
				"header-navbar-description": "text-[12px] text-muted-foreground",
			},
			typeface: {
			  serif: "font-serif",
				sans: "font-sans",
			},
		},
		defaultVariants: {
		  variant: "p",
			typeface: "sans",
		}
	})
</script>
