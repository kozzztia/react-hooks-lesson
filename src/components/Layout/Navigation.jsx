import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Navigation = ({ className }) => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <nav className={className}>
            nav
            <button onClick={toggleTheme}>
                theme
            </button>
        </nav>
    )
}

Navigation.propTypes = {
    className: PropTypes.string
}

export default Navigation