import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './view/home/home';


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
   <>
  <Home/>
  </>
);


