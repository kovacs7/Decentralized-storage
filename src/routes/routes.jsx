import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/home", element: <Home /> },
]);
