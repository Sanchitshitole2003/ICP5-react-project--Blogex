import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './view/home/home';
import Contact from "./view/contact/contact";
import About from "./view/about/about";
import BlogWriting from "./view/blogwriting/blogwriting";
import Template from './view/template/template';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
 
  {
    path: "/blogwriting",
    element: <BlogWriting />,
  },
  {
    path: '/template',
    element: <Template />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router}/>
  </>
);


