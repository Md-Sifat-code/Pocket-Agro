import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_layout from "./Layout/Main_layout";
import Home from "./Pages/Home";
import Auth_Layout from "./Layout/Auth_Layout";
import Choose from "./Authentication/Signup/Choose";
import Farmmer from "./Authentication/Signup/Farmmer";
import Buyers from "./Authentication/Signup/Buyers";
import Investors from "./Authentication/Signup/Investors";

// Define the routes with TypeScript type checking
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth_Layout />,
    children: [
      {
        path: "/auth",
        element: <Choose />,
      },
      {
        path: "/auth/farmer",
        element: <Farmmer />,
      },
      {
        path: "/auth/buyer",
        element: <Buyers />,
      },
      {
        path: "/auth/investor",
        element: <Investors />,
      },
    ],
  },
]);

// Ensure the root element is correctly typed
const rootElement = document.getElementById("root") as HTMLElement;

// Render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
