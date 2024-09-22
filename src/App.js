import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import RootLayOut from "./components/RootLayOut";
import HomePage from "./pages/home/HomePage";


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
        {
          path: 'about-page',
          element: <AboutPage />
        },
        {
          path: 'contact-page',
          element: <ContactPage />
        },
      ]
    },

    {
      path: '*',
      element: <NotFound />
    },


  ]);

  return <RouterProvider router={router} />;
}
export default App