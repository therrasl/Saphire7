import { RouterProvider } from "react-router-dom";

import { Header } from "@/widgets/header";
import { appRouter } from "./router/appRouter";
import "./App.css";
import { observer } from "mobx-react-lite";

export const Layout = observer(() => {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter()} />
    </>
  );
});

export default Layout;
