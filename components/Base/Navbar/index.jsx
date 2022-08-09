import Image from "next/image";
import { userService } from "services";
const Navbar = (props) => {
  const logout = () => {
    userService.logout();
  };
  return (
    <header className="nav-header">
      <i className="bx bx-menu" onClick={props.sidebarToggle}></i>
      <nav>
        <div className="navbar-menu">
          <div className="navbar-start">
            <span className="navbar-item is-size-7">
              <span className="navbar-item has-text-weight-medium is-size-7 pr-1">
                Системийн цаг:
              </span>
              <span className="navbar-item is-size-7 pl-0"> 12:21 </span>
            </span>

            <span className="navbar-item is-size-7">
              <span className="navbar-item has-text-weight-medium is-size-7 pr-1">
                Асах цаг:
              </span>
              <span className="navbar-item is-size-7 pl-0"> 12:21 </span>
            </span>
          </div>
          <div className="navbar-end">
            <span className="navbar-item is-size-7">
              <span className="navbar-item has-text-weight-medium is-size-7 pr-1">
                Асах хугацаа:
              </span>
              <span className="navbar-item is-size-7 pl-0"> 12:21 </span>
            </span>

            <span className="navbar-item is-size-7">
              <span className="navbar-item has-text-weight-medium is-size-7 pr-1">
                Унтрах цаг:
              </span>
              <span className="navbar-item is-size-7 pl-0"> 12:21 </span>
            </span>
          </div>
        </div>
      </nav>
      <div className="navbar-item is-size-7">
        <span className="navbar-item">
          <Image src="/img/profile.jpg" width={28} height={28} />
        </span>
        <a onClick={logout} className="navbar-item">
          {" "}
          Э.Батзаяа{" "}
        </a>
        <a className="navbar-item">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </a>
      </div>
    </header>
  );
};
export default Navbar;
