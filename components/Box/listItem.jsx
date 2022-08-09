import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const ListItem = (props) => {
  return (
    <tr key={props.data._id}>
      <td>{props.index}</td>
      <td>{props.data.displayName}</td>
      <td>{props.data.district.name}</td>
      <td>{props.data.khoroo.name}</td>
      <td>{props.data.area.name}</td>
      <td>{props.data.address}</td>
      <td>{props.index}</td>
      <td>{props.index}</td>
      <td>{props.index}</td>
      <td>{props.data.master ? props.data.master.networkAddress : ""}</td>
      <td>{props.data.counter ? props.data.counter.name : ""}</td>
      <td>{props.data.boxType.name}</td>
      <td>{props.data.boxLightType.name}</td>
      <td>
        <Link href={`/admin/register/box/edit/${props.data._id}/`}>
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
