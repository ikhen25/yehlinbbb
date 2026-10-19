import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "press inline-flex items-center justify-center gap-2 rounded-full font-semibold",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ink hover:bg-ember",
        chocolate: "bg-chocolate text-foam hover:bg-ink",
        ghost: "bg-foam text-chocolate ring-1 ring-line hover:ring-chocolate",
        foam: "bg-foam text-ink",
      },
      size: {
        md: "min-h-12 px-5 text-base",
        lg: "min-h-14 px-6 text-lg",
      },
      full: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: { variant: "gold", size: "md", full: false },
  },
);

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({ className, variant, size, full, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size, full }), className)} {...props} />;
}
