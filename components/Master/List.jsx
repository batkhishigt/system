import Paginate from "components/Base/Paginate";
import SearchTool from "components/Base/SearchTool";
import { useState, useEffect } from "react";
import Link from "next/link";
import ListItem from "./listItem";
import { masterService } from "services";
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
    masterService.getAll(page, limit).then((res) => {
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
              <Link href="master/create">
                <a className="button is-fullwidth is-small is-info">
                  <span className="icon">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  <span>Мастер төхөөрөмж нэмэх</span>
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
                  <th rowSpan="2">Самбарын дугаар</th>
                  <th rowSpan="2">Сүлжээний хаяг</th>
                  <th rowSpan="2">Сериал дугаар</th>
                  <th rowSpan="2">Модемын дугаар</th>
                  <th rowSpan="2">Аппаратын төрөл</th>
                  <th rowSpan="2">Үйлдэл</th>
                </tr>
              </thead>
              <tbody className="is-size-7 has-text-centered has-text-weight-normal">
                {datas &&
                  datas.map((data, index) => (
                    <ListItem
                      data={data}
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
