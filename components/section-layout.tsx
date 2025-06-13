import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const sectionLayoutVariants = cva("", {
  variants: {
    variant: {
      default: "py-16 md:py-32",
      card: "py-8 md:py-16",
      compact: "py-8 md:py-12",
    },
    size: {
      sm: "max-w-4xl",
      base: "max-w-6xl",
      lg: "max-w-7xl",
      xl: "max-w-screen-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
  },
});

export interface SectionLayoutProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionLayoutVariants> {
  as?: React.ElementType;
}

const SectionLayout = React.forwardRef<HTMLElement, SectionLayoutProps>(
  ({ className, variant, size, as, ...props }, ref) => {
    const Comp = as || "section";

    return (
      <Comp
        className={cn(
          "mx-auto px-6",
          sectionLayoutVariants({ variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

SectionLayout.displayName = "SectionLayout";

export { SectionLayout, sectionLayoutVariants };
