const Paginate = (props) => {
  let elements = [];

  for (let index = 1; index <= props.pagination.pageCount; index++) {
    elements.push(
      <li key={index}>
        <a
          className={
            props.pagination.page == index
              ? "pagination-link is-current"
              : "pagination-link"
          }
          onClick={(e) => {
            props.setPage(index);
          }}
          aria-label="Page 1"
          aria-current="page"
        >
          {index}
        </a>
      </li>
    );
  }

  return (
    <div className="columns pt-2">
      <div className="column pt-1">
        <nav
          className="pagination is-centered is-small"
          role="navigation"
          aria-label="pagination"
        >
          <span className="patgination-previous select is-small">
            <select
              defaultValue={props.limit}
              onChange={(e) => {
                props.setLimit(e.target.value);
                props.setPage(1);
              }}
            >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </span>
          <span
            className="pagination-previous has-background-white "
            title="This is the first page"
          >
            Нийт :{props.pagination.total} | ({props.pagination.start} -{" "}
            {props.pagination.end})
          </span>
          <a
            className="pagination-previous is-disabled ml-5"
            onClick={(e) => props.setPage(props.pagination.page - 1)}
            disabled={props.pagination.page == 1 ? true : false}
            title="This is the first page"
          >
            Өмнөх
          </a>
          <a
            className="pagination-next is-disabled"
            disabled={
              props.pagination.page == props.pagination.pageCount ? true : false
            }
            onClick={(e) => props.setPage(props.pagination.page + 1)}
          >
            Дараах
          </a>
          <ul className="pagination-list">{elements}</ul>
        </nav>
      </div>
    </div>
  );
};
export default Paginate;
