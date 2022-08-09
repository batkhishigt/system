import Paginate from "components/Base/Paginate";
import SearchTool from "components/Base/SearchTool";
import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "/components/Base/Modal/index";
import ListItem from "./listItem";
import { userService } from "services";
const UserList = () => {
  const [createModal, setCreateModal] = useState(1);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 0,
    total: 0,
    pageCount: 0,
  });
  useEffect(() => {
    userService.getAll(page, limit).then((res) => {
      setUsers(res.data);
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
              <Link href="user/create">
                <a className="button is-fullwidth is-small is-info">
                  <span className="icon">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  <span>Хэрэглэгч нэмэх</span>
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
                  <th className="px-0" rowSpan="2">
                    Зураг
                  </th>
                  <th rowSpan="2">Овог</th>
                  <th rowSpan="2">Нэр</th>
                  <th rowSpan="2">Байгууллагын нэр</th>
                  <th rowSpan="2">Албан тушаал</th>
                  <th rowSpan="2">Цахим шуудан</th>
                  <th rowSpan="2">Утас</th>
                  <th rowSpan="2">Үүрэг</th>
                  <th rowSpan="2">Удирдах дүүрэг</th>
                  <th rowSpan="2">Үйлдэл</th>
                </tr>
              </thead>
              <tbody className="is-size-7 has-text-centered has-text-weight-normal">
                {users &&
                  users.map((user, index) => (
                    <ListItem
                      data={user}
                      key={index}
                      index={pagination.start + index}
                    />
                  ))}
                {!users && (
                  <div className="spinner-border spinner-border-sm"></div>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          title="xaxa"
          size="lg"
          isShow={createModal}
          setModal={setCreateModal}
        >
          <span>xaxa</span>
        </Modal>
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
export default UserList;
