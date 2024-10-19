import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Header } from "@/widgets/header";
import { HomePage } from "@/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
