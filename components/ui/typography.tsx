import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold md:text-5xl lg:text-6xl",
      h2: "text-3xl font-semibold md:text-4xl lg:text-5xl",
      h3: "text-xl font-semibold md:text-2xl lg:text-3xl",
      h4: "text-lg font-medium md:text-xl lg:text-2xl",
      large: "text-lg md:text-xl lg:text-2xl",
      base: "text-base",
      small: "text-sm",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Comp = as || "div";

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
