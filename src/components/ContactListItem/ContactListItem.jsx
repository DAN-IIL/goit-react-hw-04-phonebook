import PropTypes from "prop-types";

const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
    return <li>
        <p>{name} : {number}</p>
        <button type="button" onClick={() => {onDelete(id)}}>Delete</button>
    </li>
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;