import Item from "./item";
import { useRouter } from "next/router";
const Sidebar = (props) => {
  const router = useRouter();
  let activeSidebar = router.pathname.split("/");
  activeSidebar = "/" + activeSidebar[1] + "/" + activeSidebar[2];
  return (
    <div className={["sidebar", props.sidebarActive].join(" ")}>
      <div className="logo_content">
        <div className="logo">
          <div className="logo_name">
            <span className="title pl-5 logo_color has-text-weight-normal is-6">
              tulga
            </span>
            <span className="title logo_color2 ml-1 is-6">
              light
              <span className="tag px-1 is-size-7 is-danger">BETA</span>
            </span>
          </div>
        </div>
      </div>
      <ul className="nav_list">
        <Item
          icon="bx bx-grid-alt"
          name="Хянах самбар"
          link="/admin/dashboard"
          path={activeSidebar}
        />
        <Item
          icon="bx bx-edit-alt"
          name="Бүртгэл"
          link="/admin/register/box"
          path={activeSidebar}
        />
        <Item
          icon="bx bx-desktop"
          name="Чат"
          link="/admin/chat"
          path={activeSidebar}
        />
        <Item
          icon="bx bx-slider"
          name="Удирдлага"
          link="/admin/controll"
          path={activeSidebar}
        />
        <Item
          icon="bx bx-cog"
          name="Тохируулга"
          link="/admin/dashboard"
          path={activeSidebar}
        />
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <div className="name_job">
              <div className="name pt-5 is-size-7">© 2022. Информатик ХХК</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
