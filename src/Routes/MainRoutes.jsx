import { Navigate, useRoutes } from "react-router"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Layout from "../Components/Layout/Layout"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Products from "../Components/Products/Products"
import SingleProduct from "../Pages/SingleProduct/SingleProduct"
import Shopping from "../Pages/Shopping/Shopping"
import Login from "../Pages/auth/Login"
import Signup from "../Pages/auth/Signup"
import { GetToken } from "../LocalStorage/LocalStorage"

const MainRoutes = () => {
    //   const user = useSelector((state) => state.user);
    const routes = useRoutes([
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '/products',
            element: GetToken() ? <Products /> : <Navigate replace to="/login" />,
          },
          {
            path: '/products/:id',
            element: GetToken() ? <SingleProduct /> : <Navigate replace to="/login" />,
          },
          {
            path: '/cart',
            element: <Shopping />,
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
        ],
      },
    ]);
  return routes
}

export default MainRoutes