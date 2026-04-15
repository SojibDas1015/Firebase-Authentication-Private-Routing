import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import AuthProvider from './Context/AuthContext/AuthProvider.jsx'
import PrivateRoutes from './Routes/PrivateRoutes.jsx'
import Profile from './Component/Profile/Profile.jsx'
import Orders from './Component/Orders/Orders.jsx'
import DeshBoard from './Component/DeshBoard/DeshBoard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: 'orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: 'deshboard',
        element: <PrivateRoutes><DeshBoard></DeshBoard></PrivateRoutes>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
