import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "@/pages/login";
import { HomePage } from "@/pages/home";

export function appRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
}
