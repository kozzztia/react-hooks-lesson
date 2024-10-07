import PropTypes from 'prop-types';
import ThemeButton from '../ThemeButton/ThemeButton';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../consts';


const Navigation = ({ className }) => {

    return (
        <nav className={`${styles.navigation} ${className}`}>
            <ul>
                {
                    navLinks.map((link) => (
                        <li key={link.id} className={styles.navLink}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? styles.active : ""}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <ThemeButton className={styles.themeButton} />
        </nav>
    );
};

Navigation.propTypes = {
    className: PropTypes.string,
};

export default Navigation;