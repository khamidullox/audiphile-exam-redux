import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
//pages
import { Home } from "./pages";
import SingleProduct from "./pages/SingleProduct";
import Error from "./pages/Error";
import Chekout from "./pages/Chekout";
import Login from "./pages/Login";
//components
import { SinglePages } from "./components";
//loader
import { loader as pagesLoader } from "./components/SinglePages";
import { loader as HomeLoader } from "./pages/Home";
import { loader as SingleProductLaoder } from "./pages/SingleProduct";
import { action as CheakoutLoader } from "./pages/Chekout";
//action
import { actionLogin } from "./pages/Login";
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
          action: CheakoutLoader,
        },
      ],
    },
    { path: "/login", element: <Login />, action: actionLogin },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
