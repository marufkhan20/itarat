import { createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import Book from "./pages/Book";
import Home from "./pages/Home";
import Myra from "./pages/Myra";
import Noya from "./pages/Noya";
import Packages from "./pages/Packages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Loading />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/myra",
        element: <Myra />,
      },
      {
        path: "/noya",
        element: <Noya />,
      },
    ],
  },
]);
