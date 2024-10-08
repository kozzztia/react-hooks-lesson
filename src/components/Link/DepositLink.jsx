import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from './styles.module.css';

const DepositLink = ({link}) => {
  return (
    <Link to={`/${link}`} className={styles.link}>
        all {link} deposits
    </Link>
  )
}

DepositLink.propTypes = {
  link: PropTypes.string.isRequired,
}

export default DepositLink