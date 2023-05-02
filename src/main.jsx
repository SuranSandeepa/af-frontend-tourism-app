import React from "react";
import ReactDOM from "react-dom/client";
import HomeContainer from "./HomeContainer";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TourPage from "./pages/TourPage/Tours";
import TourDetails from "./pages/TourDetails/TourDetails";
import TourRegister from "./pages/TourRegister/TourRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
    children: [
      {
        path: "/tours",
        element: <TourPage />,
      },
      {
        path: "/tours/register",
        element: <TourRegister />
      },
      {
        path: "/tours/:tour_id",
        element: <TourDetails />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
