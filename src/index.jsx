import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { GamePage } from './pages/GamePage';
import { ErrorPage } from './pages/ErrorPage';
import { ActivityPage } from './pages/ActivityPage';
import { PlannerPage } from './pages/PlannerPage';
import { Xmas } from './pages/Xmas';
import { MonsterPage } from './pages/MonsterPage';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menupage',
        element: <MenuPage />,
      },
      {
        path: '/activitypage',
        element: <ActivityPage />,
      },
      { path: '/plannerpage', element: <PlannerPage /> },
      {
        path: '/gamepage',
        element: <GamePage />,
      },
      {
        path: '/xmas',
        element: <Xmas />,
      },
      {
        path: '/monsterpage',
        element: <MonsterPage />,
      },
    ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
