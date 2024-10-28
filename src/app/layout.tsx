import { RouterProvider } from "react-router-dom";

import { Header } from "@/widgets/header";
import { appRouter } from "./router/appRouter";
import "./App.css";

export function Layout() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter()}/>
    </>
  );
}

export default Layout;
