import Link from "next/link";
const Item = (props) => {
  return (
    <li>
      <Link href={props.link}>
        <a>
          <i className={props.icon}></i>
          <span className="link_name">{props.name}</span>
        </a>
      </Link>
      <span className="tooltip">{props.link}</span>
    </li>
  );
};
export default Item;
