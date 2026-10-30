import { Container } from "@/components/ui/Container";
import { SITE } from "@/constants/site";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function PlaceholderPage() {
  useDocumentTitle();

  return (
    <Container className="flex min-h-dvh items-center py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{SITE.name}</h1>
        <p className="mt-4 text-lg leading-relaxed">{SITE.tagline}</p>
      </div>
    </Container>
  );
}
