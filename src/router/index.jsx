import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"
import MainPage from '../layout/MainPage';
import Continent from '../pages/Continent';

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