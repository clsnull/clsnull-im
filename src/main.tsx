import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'

import App from "./App";
import Chat from "./views/chat";
import My from "./views/my";
import Group from "./views/group";
import Login from "./views/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "login",
    element: <Login />,
  }, {
    path: "my",
    element: <My />,
  }, {
    path: "group",
    element: <Group />,
  }, {
    path: "chat",
    element: <Chat />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
