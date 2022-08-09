import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconArr = [
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
  faLightbulb,
];
export default function Index(props) {
  return (
    <div className="columns pt-4">
      <div className="column is-12">
        <p className="title mb-2 ml-0 is-7 is-uppercase">Шит самбар</p>
        <div className="white-border active p-4">
          <div className="columns is-variable is-1" id="control">
            {props.data.map((status) => {
              return (
                <div className="column has-text-centered" key={status.id}>
                  <div
                    className={`card is-clickable ${
                      props.status === status.index
                        ? "has-background-warning"
                        : ""
                    }`}
                    onClick={(e) => props.statusChange(status.index)}
                  >
                    <div className="card-content px-0 py-1">
                      <FontAwesomeIcon icon={iconArr[status.index]} />
                      <br />
                      <span className="is-size-7">{status.shortName}</span>
                      <br />
                      <span>{status.boxCounter}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* 
            <div className="column has-text-centered">
              <a href="#">
                <div className="card has-background-warning-light">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">Ассан</span>
                    <br />
                    <span>125</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">Унтарсан</span>
                    <br />
                    <span>24</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">К.Ассан</span>
                    <br />
                    <span>6</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">К.Унтарсан</span>
                    <br />
                    <span>5</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">Гар.У Ассан</span>
                    <br />
                    <span>5</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">Гар.У Унтар</span>
                    <br />
                    <span>3</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-clock"></i>
                    <br />
                    <span className="is-size-7">Таймер</span>
                    <br />
                    <span>7</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-bolt"></i>
                    <br />
                    <span className="is-size-7">Эрчим хүч</span>
                    <br />
                    <span>2</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-envelope"></i>
                    <br />
                    <span className="is-size-7">Хариугүй</span>
                    <br />
                    <span>6</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <br />
                    <span className="is-size-7">Засвартай</span>
                    <br />
                    <span>12</span>
                  </div>
                </div>
              </a>
            </div> */}

            {/* <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-filter-circle-xmark"></i>
                    <br />
                    <span className="is-size-7">Сүлжээгүй</span>
                    <br />
                    <span>5</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-door-open"></i>
                    <br />
                    <span className="is-size-7">Хаалга</span>
                    <br />
                    <span>3</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-rectangle-xmark"></i>
                    <br />
                    <span className="is-size-7">Алдаатай</span>
                    <br />
                    <span>7</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <br />
                    <span className="is-size-7">Гэмтэлтэй</span>
                    <br />
                    <span>2</span>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Гэрэлтүүлэгч --> */}
      {/* <div className="column">
        <p className="title mb-2 ml-0 is-7 is-uppercase">Гэрэлтүүлэгч</p>
        <div className="white-border p-4">
          <div className="columns is-variable is-1" id="control2">
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">Ассан</span>
                    <br />
                    <span>125</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-lightbulb"></i>
                    <br />
                    <span className="is-size-7">Унтарсан</span>
                    <br />
                    <span>24</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-person-walking"></i>
                    <br />
                    <span className="is-size-7">Х.Мэдрэгч</span>
                    <br />
                    <span>6</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-sliders"></i>
                    <br />
                    <span className="is-size-7">Дим</span>
                    <br />
                    <span>12</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-regular fa-envelope"></i>
                    <br />
                    <span className="is-size-7">Хариугүй</span>
                    <br />
                    <span>5</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="#">
                <div className="card">
                  <div className="card-content px-0 py-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <br />
                    <span className="is-size-7">Гэмтэлтэй</span>
                    <br />
                    <span>3</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
