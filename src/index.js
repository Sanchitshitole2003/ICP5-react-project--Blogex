import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './view/home/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Template from './view/template/template';

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


