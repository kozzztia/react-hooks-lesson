import { PropTypes } from 'prop-types';
import styles from './styles.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                header
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                footer
            </footer>
        </>
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout