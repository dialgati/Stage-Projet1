import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Connexion from './connect/Connexion'
import Inscription from "./connect/Inscription";
import App from "./App";
import Dashboard from "./Pages/Dashboard";
import Hotels from "./Pages/Hotels";

const route = createBrowserRouter([
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "admin/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/Hotels",
        element: <Hotels />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
