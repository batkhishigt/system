import Link from "next/link";
const ItemTab = (props) => {
  return (
    <Link href={props.link}>
      <a>
        <span className="icon is-small">{props.icon}</span>
        <span className="pl-2">{props.title}</span>
      </a>
    </Link>
  );
};
export default ItemTab;
