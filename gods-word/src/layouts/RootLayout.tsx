import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-midnight focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <main id="main" className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
