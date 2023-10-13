import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './view/home/home';
import SignUp from './view/login-signup/signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './view/login-signup/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Home/> */}
    {/* <SignUp /> */}
    <RouterProvider router={router} />
  </>
);


