import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Album } from "../components/Album";
import { Home } from "../components/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/album", element: <Album /> },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
