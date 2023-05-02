import React from "react";
import ReactDOM from "react-dom/client";
import HomeContainer from "./HomeContainer";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TourPage from "./pages/TourPage/Tours";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
    children: [
      {
        path: "/tours",
        element: <TourPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
