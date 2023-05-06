import { Outlet } from "react-router-dom";
import AdminHeader from "@components/AdminHeader/AdminHeader";
import AdminSideBar from "@components/AdminSideBar/AdminSideBar";

function AdminContainer() {
  return (
    <>
      <AdminHeader />
      <div className="flex flex-row gap-4 w-full h-screen">
        <AdminSideBar />
        <Outlet />
      </div>
    </>
  );
}

export default AdminContainer;
