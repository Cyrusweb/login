import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/pages/Welcome.js";
import Login from "./components/pages/Login.js";
import Signup from "./components/pages/Signup.js";
import App from "./App.jsx";
import RootLayout from "./components/Layout/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/User",
        element: <App />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
