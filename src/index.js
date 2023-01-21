import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import NewProduct from './pages/NewProduct'
import ProductDetail from './pages/ProductDetail'
import MyCart from './pages/MyCart'
import ProtectedRoute from './pages/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      //
      { index: true, element: <Home /> },
      {
        path: '/products',
        element: <AllProducts />,
      },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
