import { useRouter } from "next/router";
import ItemTab from "./itemTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faHardDrive,
  faLightbulb,
  faTowerBroadcast,
  faTrashCan,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const Index = (props) => {
  const { pathname } = useRouter();
  const urlArr = pathname.split("/");
  return (
    <div className="tabs is-small is-toggle is-fullwidth">
      <ul className="has-text-weight-normal has-text-info">
        <li className={urlArr.includes("box") ? "is-active" : ""}>
          <ItemTab
            link="/admin/register/box"
            title="Самбар"
            icon={<FontAwesomeIcon icon={faCalculator} />}
          />
        </li>
        <li className={urlArr.includes("pole") ? "is-active" : ""}>
          <ItemTab
            link="/admin/register/pole"
            title="Шон"
            icon={<FontAwesomeIcon icon={faTowerBroadcast} />}
          />
        </li>
        <li className={urlArr.includes("light") ? "is-active" : ""}>
          <ItemTab
            link="/admin/register/light"
            title="Гэрлийн толгой"
            icon={<FontAwesomeIcon icon={faLightbulb} />}
          />
        </li>
        <li className={urlArr.includes("lamp") ? "is-active" : ""}>
          <ItemTab
            link="/admin/register/lamp"
            title="Гэрэлтүүлэгч аппарат"
            icon={<FontAwesomeIcon icon={faHardDrive} />}
          />
        </li>
        <li className={urlArr.includes("master") ? "is-active" : ""}>
          <ItemTab
            link="/admin/register/master"
            title="Мастер аппарат"
            icon={<FontAwesomeIcon icon={faHardDrive} />}
          />
        </li>
        <li className={urlArr.includes("counter") ? "is-active" : ""}>
          <ItemTab
            link="/admin/register/counter"
            title="Тоолуур"
            icon={<FontAwesomeIcon icon={faHardDrive} />}
          />
        </li>

        <li className={urlArr.includes("user") ? "is-active" : ""}>
          <ItemTab
            link="/admin/register/user"
            title="Хэрэглэгч"
            icon={<FontAwesomeIcon icon={faUsers} />}
          />
        </li>
      </ul>
    </div>
  );
};
export default Index;
