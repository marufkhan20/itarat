import { createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Loading />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
