import Navbar from "components/Base/Navbar/index";
import Sidebar from "components/Base/sidebar/index";
import { useState } from "react";
const Login = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState("active");
  const sidebarToggle = () => {
    setSidebarActive(sidebarActive === "" ? "active" : "");
  };
  return (
    <>
      <div className="home_content">
        <main className="pt-6">
          <p className="title">Dashboard</p>
          {children}
        </main>
      </div>
    </>
  );
};
export default Login;
