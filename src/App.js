import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout";
import Products from "./features/product/Products";
import SignUp from "./features/auth/SignUp";
import Login from "./features/auth/Login";
import UserRoutes from "./ui/UserRoutes";


const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Products />

        },


        {
          element: <UserRoutes />,
          children: [
            {
              path: 'login',
              element: <Login />

            },

            {
              path: 'signup',
              element: <SignUp />

            }
          ]
        }

      ]
    },




  ]);

  return <RouterProvider router={router} />;
}
export default App