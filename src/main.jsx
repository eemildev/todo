import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import Authentication, { AuthenticationMode } from './screens/Authentication'
import ProtectedRoute from './components/ProtectedRoute'
import UserProvider from './context/userProvider.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from "./screens/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <App />,
      }
    ]
  },
  {
    path: "/signin",
    element: <Authentication authenticationMode={AuthenticationMode.SignIn} />
  },
  {
    path: "/signup",
    element: <Authentication authenticationMode={AuthenticationMode.SignUp} />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)
