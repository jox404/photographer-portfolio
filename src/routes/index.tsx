import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Album } from "../components/Album";
import { Home } from "../components/Home";
import { Services } from "../components/Services";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/album", element: <Album /> },
  { path: "/services", element: <Services /> },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
