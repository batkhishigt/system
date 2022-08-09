import Paginate from "components/Base/Paginate";
import SearchTool from "components/Base/SearchTool";
import { useState, useEffect } from "react";
import Link from "next/link";
import ListItem from "./listItem";
import { boxService } from "services";
const List = () => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 0,
    total: 0,
    pageCount: 0,
  });
  useEffect(() => {
    boxService.getAll(page, limit).then((res) => {
      setDatas(res.data);
      setPagination(res.pagination);
    });
  }, [, page, limit]);
  return (
    <>
      <div className="columns">
        <div className="border-box">
          {/* <SearchTool /> */}
          <div className="column is-2">
            <p className="control">
              <Link href="box/create">
                <a className="button is-fullwidth is-small is-info">
                  <span className="icon">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  <span>Шинээр үүсгэх</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="fixTable">
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr className="has-text-centered">
                  <th rowSpan="2">№</th>
                  <th className="" rowSpan="2">
                    Самбарын дугаар
                  </th>
                  <th colSpan="3">Байршил</th>
                  <th rowSpan="2">Хаяг</th>
                  <th rowSpan="2">Шон</th>
                  <th rowSpan="2">Гэрлийн толгой</th>
                  <th rowSpan="2">Гэрэлтүүлэгч аппарат</th>
                  <th rowSpan="2">Мастер</th>
                  <th rowSpan="2">Тоолуур</th>
                  <th rowSpan="2">Самбарын төрөл</th>
                  <th rowSpan="2">Гэрэлтүүлгийн төрөл</th>
                  <th rowSpan="2"></th>
                </tr>
                <tr>
                  <th>Сум, дүүрэг</th>
                  <th>Баг, хороо</th>
                  <th>Бүс</th>
                </tr>
              </thead>
              <tbody className="is-size-7 has-text-centered has-text-weight-normal">
                {datas &&
                  datas.map((user, index) => (
                    <ListItem
                      data={user}
                      key={index}
                      index={pagination.start + index}
                    />
                  ))}
                {!datas && (
                  <div className="spinner-border spinner-border-sm"></div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Paginate
        pagination={pagination}
        setPage={setPage}
        setLimit={setLimit}
        limit={limit}
      />
    </>
  );
};
export default List;
