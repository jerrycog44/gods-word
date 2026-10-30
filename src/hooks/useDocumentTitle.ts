import { useEffect } from "react";
import { SITE } from "@/constants/site";

/** Sets the document title. Pass nothing to use the site name alone. */
export function useDocumentTitle(title?: string): void {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : SITE.name;
  }, [title]);
}
