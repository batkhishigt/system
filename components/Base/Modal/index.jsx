const Modal = ({ children, title, size, isShow, setModal }) => {
  const closeModal = () => {
    setModal("");
  };

  return (
    <div className={["modal", size, "modal-fx-fadeInScale", isShow].join(" ")}>
      <div onClick={closeModal} className="modal-background"></div>
      <div className="modal-card px-5">
        <div className="modal-card-head">
          <p className="modal-card-title has-text-weight-medium is-size-6">
            {title}
          </p>
          <button
            onClick={closeModal}
            className="delete"
            id="modal-close"
            aria-label="close"
          ></button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
