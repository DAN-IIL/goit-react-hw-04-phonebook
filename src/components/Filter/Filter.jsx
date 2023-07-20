import PropTypes from "prop-types";
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return <div className={styles.filter}>
        <p>Find contacts by name</p>
        <input type="text" onChange={onChange} value={value} />
    </div>
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;