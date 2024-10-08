import PropTypes from 'prop-types';
import styles from './styles.module.css';


const Title = ({text, count, role}) => {
  return (
    <h4 className={styles.title}>
        {text}
        <span>{count}</span>
        {
            role === "active" && <button>+</button>
        }
    </h4>
  )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["active", "closed"]),
    count: PropTypes.number.isRequired,
}

export default Title