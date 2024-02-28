import "./modal.css";
import PropTypes from "prop-types";

const Modal = ({ show, edit, setEdit, updateItem, showModal }) => {
  return (
    <div>
      {show && <div className="layer" onClick={showModal}></div>}
      {show && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Edit Item</h3>
              <button className="btn-close" onClick={showModal}>
                x
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                name="groceryTitle"
                value={edit}
                onChange={(e) => setEdit(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="btn-danger" onClick={showModal}>
                Close
              </button>
              <button className="btn-edit" onClick={updateItem}>
                update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  edit: PropTypes.string.isRequired,
  setEdit: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Modal;
