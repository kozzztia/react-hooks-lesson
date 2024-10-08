import PropTypes from 'prop-types';
import ThemeButton from '../ThemeButton/ThemeButton';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../consts';

import photo from '../../assets/photos/profile-photo.png';
import Icon from '../icon/Icon';


const Navigation = ({ className }) => {

    return (
        <nav className={`${styles.navigation} ${className}`}>
            <figure>
                <img src={photo} alt="photo" />
                <figcaption>
                    scott grand
                </figcaption>    
            </figure>
            <ul>
                {
                    navLinks.map((link) => (
                        <li key={link.id} className={styles.navLink}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? styles.active : ""}>
                                <Icon name={link.name} />
                                <span>{link.name}</span>
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