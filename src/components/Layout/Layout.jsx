import { PropTypes } from 'prop-types';
import styles from './styles.module.css';
import Navigation from '../Navigation/Navigation';
import photo from '../../assets/photos/profile-photo.png';
import { useLocation } from 'react-router-dom';
import Icon from '../icon/Icon';
import { useEffect } from 'react';

const Layout = ({ children }) => {
    const location = useLocation()
    useEffect(() => {
        const name = location.pathname.split("/").pop();
        document.title = (name? name : "Home").toUpperCase();
    },[location])
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <button>
                    <Icon name="message"/>
                </button>
                <img src={photo} alt="photo" />
            </header>
            <Navigation className={styles.nav} />
            <section className={styles.section}>
                {children}
            </section>
            <footer className={styles.footer}>
                footer
            </footer>
        </main>
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout