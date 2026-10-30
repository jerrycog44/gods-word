import type { ClassValue } from "@/types/common";

/** Joins truthy class names into a single string. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
