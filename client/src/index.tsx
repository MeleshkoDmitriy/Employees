import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Paths } from "./utils/paths";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { EmployeesPage } from "./pages/employees/EmployeesPage";
import { AddEmployeePage } from "./pages/add-employee/AddEmployeePage";
import { StatusPage } from "./pages/status/StatusPage";
import { Auth } from "./store/slices/Auth";

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <EmployeesPage /> ,
  },
  {
    path: Paths.LOGIN,
    element: <LoginPage />,
  },
  {
    path: Paths.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: Paths.EMPLOYEES,
    element: <AddEmployeePage />,
  },
  {
    path: `${Paths.STATUS}/:status`,
    element: <StatusPage />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </Provider>
  </React.StrictMode>
);
