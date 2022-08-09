import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const ListItem = (props) => {
  return (
    <tr key={props.data._id}>
      <td>{props.index}</td>
      <td className="has-text-centered px-0">
        <div className="profile pt-1">
          {/* <img src="./img/profile.jpg"> */}
        </div>
      </td>
      <td>{props.data.firstName}</td>
      <td>{props.data.lastName}</td>
      <td>{props.data.workName}</td>
      <td>{props.data.workPosition}</td>
      <td>{props.data.email}</td>
      <td>{props.data.phone}</td>
      <td>{props.data.role}</td>
      <td>Сүхбаатар, Хан-Уул</td>
      <td>
        <Link href={`/admin/register/user/edit/${props.data._id}/`}>
          <a className="pr-4">
            <FontAwesomeIcon icon={faPenToSquare} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <FontAwesomeIcon icon={faTrashCan} />
          </a>
        </Link>
      </td>
    </tr>
  );
};
export default ListItem;
