import { PropTypes } from 'prop-types';
import styles from './styles.module.css';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                header
            </header>
            <Navigation className={styles.nav}/>
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