import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Page1 from "./pages/nested/Page1";
import Page2 from "./pages/nested/Page2";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: 'page-1',
          element: <Page1 />
        },
        {
          path: 'page-2',
          element: <Page2 />
        },
      ]
    },
    {
      path: 'about-page',
      element: <AboutPage />
    },
    {
      path: 'contact-page',
      element: <ContactPage />
    },
    {
      path: '*',
      element: <NotFound />
    },


  ]);




  return <RouterProvider router={router} />;
}
export default App