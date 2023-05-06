import { Outlet } from "react-router-dom";
import AdminHeader from "@components/AdminHeader/AdminHeader";
import AdminSideBar from "@components/AdminSideBar/AdminSideBar";

function AdminContainer() {
  return (
    <>
      <AdminHeader />
      <div>
        <AdminSideBar />
        <Outlet />
      </div>
    </>
  );
}

export default AdminContainer;
