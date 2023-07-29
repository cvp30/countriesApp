import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../components/MainPage';
import Home from "../pages/Home"
import Continent from '../pages/Continent'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'continent/:code',
        element: <Continent />
      }
    ]
  }
])