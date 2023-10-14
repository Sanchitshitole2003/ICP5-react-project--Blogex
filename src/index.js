import ReactDOM from 'react-dom/client';
import Contact from './view/contact/contact';


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


