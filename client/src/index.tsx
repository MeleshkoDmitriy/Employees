import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Paths } from './utils/paths';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <h1>Home</h1>
  },
  {
    path: Paths.LOGIN,
    element: <LoginPage />
  },
  {
    path: Paths.REGISTER,
    element: <RegisterPage />
  },
  {
    path: Paths.EMPLOYEES,
    element: <h1>Employees</h1>
  },
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
); 