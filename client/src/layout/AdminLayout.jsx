import { Outlet } from "react-router";
import Sidebar from "../component/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;