import React from "react";
import ReactDOM from "react-dom/client";
import HomeContainer from "./HomeContainer";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TourPage from "./pages/TourPage/Tours";
import TourDetails from "./pages/TourDetails/TourDetails";
import TourRegister from "./pages/TourRegister/TourRegister";
import AccomodationPage from "./pages/AccomodationPage/AccomodatoinPage";
import Shop from "./pages/Shop/Shop";
import AccomodationDetails from "./pages/AccomodationDetails/AccomodationDetails/AccomodationDetails";

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
      },
      {
        path: "/stay",
        element: <AccomodationPage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/rooms/:room_id",
        element: <AccomodationDetails />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
