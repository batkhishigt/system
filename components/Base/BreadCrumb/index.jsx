import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import urlData from "services/data/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = (props) => {
  const [breadCrumbes, setBreadCrumbes] = useState([]);
  const { pathname } = useRouter();
  useEffect(() => {
    setBreadCrumbes(pathname.split("/"));
  }, []);
  let url = "";
  let select;
  return (
    <nav
      className="breadcrumb has-arrow-separator is-small mb-2"
      aria-label="breadcrumbs"
    >
      <ul>
        {breadCrumbes.map((el, index) => {
          select = urlData(el);
          url = url.concat(el, "/");
          return (
            <li
              key={index}
              className={breadCrumbes.length === index + 1 ? "is-active" : ""}
            >
              <Link href={url}>
                <a aria-current="page">
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={select.icon} />
                  </span>
                  <span>{select.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Index;
