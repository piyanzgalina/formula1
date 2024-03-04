import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Search, Home, RaceResults, Schedule, ErrorPage, Layout } from '../src/pages/index';
import './reset.css';
import './index.scss';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: '/schedule',
        element: <Schedule />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/search/:selectedYear/:selectedCircuit/results',
        element: <RaceResults />,
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>,
)
