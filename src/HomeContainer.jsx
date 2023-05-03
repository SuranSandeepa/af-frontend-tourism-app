import Header from "@components/Header/Header";
import TourPage from "@pages/TourPage/Tours";
import { Outlet } from "react-router-dom";

function HomeContainer() {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default HomeContainer
