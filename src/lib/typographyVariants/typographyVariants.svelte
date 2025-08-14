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
				p: "leading-7 [&:not(:first-child)]:mt-6",
				blockquote: "mt-6 border-l-2 pl-6 italic",
				list: "my-6 ml-6 list-disc [&>li]:mt-2",
				inlineCode: "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				lead: "text-muted-foreground text-xl",
				large: "text-lg font-semibold",
				small: "text-sm leading-none font-medium",
				muted: "text-muted-foreground text-sm",
				link: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
