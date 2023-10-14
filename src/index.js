import ReactDOM from 'react-dom/client';
import Contact from './view/contact/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contact />
  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './view/home/home';
import Contact from "./view/contact/contact";
import About from "./view/about/about";
import Blog from "./view/blogdisplay/blogdisplay";
import BlogWriting from "./view/blogwriting/blogwriting";

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
    path: "/blogdisplay",
    element: <Blog />,
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
    <Home />
  </>
>>>>>>> 5dd7011cb2051ddeca87c2b56d6d2ebd2bea0270
);


