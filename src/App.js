import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout";
import Products from "./features/product/Products";
import SignUp from "./features/auth/SignUp";
import Login from "./features/auth/Login";
import UserRoutes from "./ui/UserRoutes";
import ProductAdmin from "./features/admin/ProductAdmin";
import ProductForm from "./features/admin/ProductForm";
import ProductEdit from "./features/admin/productEdit/ProductEdit";
import ProductDetail from "./features/product/ProductDetail";


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
          path: 'product-admin',
          element: <ProductAdmin />
        },
        {
          path: 'product-form',
          element: <ProductForm />
        },

        {
          path: 'product-edit/:id',
          element: <ProductEdit />
        },

        {
          path: 'product-detail/:id',
          element: <ProductDetail />
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