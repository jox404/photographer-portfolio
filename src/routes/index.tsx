import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Album } from "../components/Album";
import { Extra } from "../components/Extra";
import { Home } from "../components/Home";
import { Services } from "../components/Services";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/album", element: <Album /> },
  { path: "/services", element: <Services /> },
  { path: "/extra", element: <Extra /> },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
