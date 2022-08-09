import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const ListItem = (props) => {
  return (
    <tr key={props.data._id}>
      <td>{props.index}</td>
      <td>{props.data.box ? props.data.box.displayName : ""}</td>
      <td>{props.data.networkAddress}</td>
      <td>{props.data.serialNumber}</td>
      <td>{props.data.modemNumber}</td>
      <td>{props.data.masterType.name}</td>
      <td>
        <Link href={`/admin/register/master/edit/${props.data._id}/`}>
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
