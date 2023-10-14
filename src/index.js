import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import Home from './view/home/home';
import
=======
import Contact from './view/contact/contact';

>>>>>>> 46f2495dbca3155216c85a8d635e35e4d4a8ca70

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/template',
    element: <Template/>
  },
  {
    path: '/home',
    element: <Home/>
  }])
root.render(
  <Contact />
  

);


