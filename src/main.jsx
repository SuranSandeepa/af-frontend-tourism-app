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
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import EatDrinkPage from "./pages/EatDrinkPage/EatDrinkPage";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AdminContainer from "./AdminContainer";
import AccomodationManager from "./pages/Admin/AccomodationManager/AccomodationManager";
import ShopManagement from "./pages/Admin/ShopManagement/ShopManagement";
import TourManagement from "./pages/Admin/TourManagement/TourManager";
import RestaurantsManager from "./pages/Admin/RestaurantsManager/RestaurantsManager";
import ReservationForm from "./pages/ReservationPage/ReservationForm";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import NotFound from "./NotFound";
import TourRegisterSuccess from "./pages/TourRegisterSuccess/TourRegisterSuccess";

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
        element: <TourRegister />,
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
        element: <AccomodationDetails />,
      },
      {
        path: "/products/:product_id",
        element: <ProductDetailsPage />,
      },
      { path: "/shop/:shop_id", element: <ShopPage /> },
      {
        path: "/eat-drink",
        element: <EatDrinkPage />,
      },
      {
        path: "/reserve/:room_id",
        element: <ReservationForm />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/tour-reg-success",
        element: <TourRegisterSuccess />,
      },
      {
        path: "/",
        element: <NotFound />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminContainer />,
    children: [
      {
        path: "accommodations",
        element: <AccomodationManager />,
      },
      {
        path: "shops",
        element: <ShopManagement />,
      },
      {
        path: "tours",
        element: <TourManagement />,
      },
      {
        path: "restaurants",
        element: <RestaurantsManager />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
