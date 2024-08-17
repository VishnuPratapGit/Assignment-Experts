import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Card from './components/Card.jsx'
import CardData from './components/CardData.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/:cardId",
    element: <CardData />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
