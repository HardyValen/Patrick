<script module>
	import { tv } from "tailwind-variants";

	export const alignmentVariants = tv({
		variants: {
		  "text-align": {
				left: "text-left",
				center: "text-center",
				right: "text-right"
			},
			"align-items": {
			  left: "items-start",
				center: "items-center",
				right: "items-end"
			},
			"justify-content": {
			  left: "justify-start",
				center: "justify-center",
				right: "justify-end",
			}
		}
	})
</script>
