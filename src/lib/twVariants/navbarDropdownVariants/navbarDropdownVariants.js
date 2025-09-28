import { tv } from "tailwind-variants";

const navbarDropdownVariants = tv({
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

export default navbarDropdownVariants;
