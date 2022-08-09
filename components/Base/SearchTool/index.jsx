const SearchTool = (props) => {
  return (
    <div className="column">
      <div className="field is-grouped">
        <p className="control">
          <span className="select is-small">
            <select>
              <option>Хан-Уул</option>
              <option>Сүхбаатар</option>
              <option>Баянгол</option>
            </select>
          </span>
        </p>
        <p className="control">
          <span className="select is-small">
            <select>
              <option>1 - р хороо</option>
              <option>2 - р хороо</option>
              <option>3 - р хороо</option>
            </select>
          </span>
        </p>
        <p className="control">
          <span className="select is-small">
            <select>
              <option>А</option>
              <option>B</option>
              <option>C</option>
            </select>
          </span>
        </p>
      </div>
    </div>
  );
};
export default SearchTool;
