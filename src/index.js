import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './view/home/home';
import Contact from './view/contact/contact';
import About from './view/about/about';
import Blogdisplay from './view/blogdisplay/blogdisplay'
import BlogWriting from './view/blogwriting/blogwriting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: "/blogdisplay",
    element: <Blogdisplay />,
  },
  {
    path: '/blogwriting',
    element: <BlogWriting />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Home />
  </>
);


