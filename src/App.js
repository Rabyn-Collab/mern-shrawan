import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayOut from "./components/RootLayOut";
import HomePage from "./pages/HomePage";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <HomePage />
        },

      ]
    },

    // {
    //   path: '*',
    //   element: <NotFound />
    // },


  ]);

  return <RouterProvider router={router} />;
}
export default App