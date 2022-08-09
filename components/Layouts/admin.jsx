import Navbar from "components/Base/Navbar/index";
import Sidebar from "components/Base/sidebar/index";
import BreadCrumb from "components/Base/BreadCrumb/index";
import { useState } from "react";
const Admin = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState("active");
  const sidebarToggle = () => {
    setSidebarActive(sidebarActive === "" ? "active" : "");
  };
  return (
    <>
      <Sidebar sidebarActive={sidebarActive} />
      <div className="home_content">
        <Navbar sidebarToggle={sidebarToggle} />
        <main className="pt-6">
          <BreadCrumb />

          {children}
        </main>
      </div>
    </>
  );
};
export default Admin;
