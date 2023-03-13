import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'

import Root from "./router/Root";
import ErrorPage from "./views/error/error-page";
import Login from './views/login/login'
import My from './views/my/my'
import Group from './views/group/group'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      index: true,
      element: <Group />
    }, {
      path: "/my",
      element: <My />
    }]
  }, {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
