import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { RootLayout } from "@/layouts/RootLayout";
import { PlaceholderPage } from "@/pages/PlaceholderPage";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <RootLayout />,
    children: [{ index: true, element: <PlaceholderPage /> }],
  },
]);
