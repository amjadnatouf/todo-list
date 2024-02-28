import { FaEdit, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const List = ({ items, removeItem, editItem, iscompleted }) => {
  const handelCom = (id) => {
    iscompleted(id);
  };
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="list-item" key={id}>
            <p
              className={`title ${item.completed && "completed"}`}
              onClick={() => handelCom(item.id)}
            >
              {title}
            </p>
            <div className="btn-container">
              <button
                className="btn-edit"
                onClick={() => {
                  editItem(id);
                }}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="btn-delete"
                onClick={() => {
                  removeItem(id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  iscompleted: PropTypes.func.isRequired,
};

export default List;
