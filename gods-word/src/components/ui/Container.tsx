import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

/** Centred, width-constrained wrapper with responsive horizontal padding. */
export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12", className)} {...props} />;
}
