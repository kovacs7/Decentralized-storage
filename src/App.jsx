import Landing from "./pages/Landing";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <div className="overflow-hidden">
        <RouterProvider router={routes}>
          <Landing />
        </RouterProvider>
        <ToastContainer />
      </div>
    </>
  );
}
