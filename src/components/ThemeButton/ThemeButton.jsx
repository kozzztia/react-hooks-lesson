import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeButton = ({className}) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button className={`${className} ${styles.button}`} onClick={toggleTheme}>
            <div className={theme === "light" ? styles.light : styles.dark}></div>
        </button>
    )
}

ThemeButton.propTypes = {
    className: PropTypes.string,
};

export default ThemeButton