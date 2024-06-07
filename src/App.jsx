import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
//pages
import { Home } from "./pages";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
//components
import { SinglePages } from "./components";
//loader
import { loader as pagesLoader } from "./components/SinglePages";
import { loader as HomeLoader } from "./pages/Home";
import { loader as SingleProductLaoder } from "./pages/SingleProduct";
import Chekout from "./pages/Chekout";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          // path: "/pages/:id ",
          path: "/pages/:id",
          element: <SinglePages />,
          loader: pagesLoader,
        },
        {
          path: "/product/:slug",
          element: <SingleProduct />,
          loader: SingleProductLaoder,
        },
        {
          path: "/chekout",
          element: <Chekout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
