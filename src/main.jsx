import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import './styles/nav.css'
import './styles/banner.css'
import Achat from './pages/Achat.jsx'
import Cart from './composant/Cart.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/*",
    element: "404"
  },
  {
    path:"/card",
    element: <Cart/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
