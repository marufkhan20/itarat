import { createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import Book from "./pages/Book";
import Home from "./pages/Home";
import Myra from "./pages/Myra";
import Noya from "./pages/Noya";
import Packages from "./pages/Packages";
import Products from "./pages/Products";
import Wishlist from "./pages/Wishlist";

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
        path: "/wishlist",
        element: <Wishlist />,
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
        path: "/myra/products",
        element: <Products />,
      },
      {
        path: "/noya",
        element: <Noya />,
      },
    ],
  },
]);
