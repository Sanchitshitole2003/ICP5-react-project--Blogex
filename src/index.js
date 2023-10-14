import ReactDOM from 'react-dom/client';
import Home from './view/home/home';
import Contact from './view/contact/contact';
import SignUp from './view/login-signup/signup';
import Template from './view/template/template';
import About from './view/about/about';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/template',
    element: <Template/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
{
  path: '/contact',
  element: <Contact/>
},
{
  path: '/Signup',
  element: <SignUp/>
},
])


  root.render(
<RouterProvider router={router}/>
    );


