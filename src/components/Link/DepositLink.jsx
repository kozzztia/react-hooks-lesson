import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from './styles.module.css';

const DepositLink = ({link , title}) => {
  return (
    <Link to={`/${link}`} className={styles.link}>
        {title}
    </Link>
  )
}

DepositLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default DepositLink