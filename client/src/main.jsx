import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {ClerkProvider} from '@clerk/clerk-react'
import './index.css'
import SignInPage from './pages/SignInPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import FeaturesPage from './pages/FeaturesPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}



const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/sign-in',
        element: <SignInPage />
      },
      {
        path: '/sign-up',
        element: <SignUpPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}>
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
