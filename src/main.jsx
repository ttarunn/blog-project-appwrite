import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from "./store/store.js";
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddPost, AllPosts, EditPosts, Homepage, Login, Post, Signup } from './pages';
import { AuthLayout } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path:'/all-post',
        element: (
          <AuthLayout authentication>
            {' '}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path:'/add-post',
        element: (
          <AuthLayout authentication>
            {' '}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path:'/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {' '}
            <EditPosts />
          </AuthLayout>
        )
      },
      {
        path:'/post/:slug',
        element: <Post />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    
  </React.StrictMode>,
)
