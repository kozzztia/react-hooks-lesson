import PropTypes from "prop-types";


import styles from "./styles.module.css";
import {tableProperties} from "../../consts";

const Table = ({ properties }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {
                        tableProperties.map((item) => (
                            <th key={item.id}>{item.property}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {properties.map((property, index) => (
                    <tr key={index}>
                        <td ><img src={property.userInon} alt="userInon" /><span><p>{property.property}</p><p>{property.city}</p></span></td>
                        <td >{property.moveInDate}</td>
                        <td >{property.rent}</td>
                        <td >{property.deposit}</td>
                        <td >
                            {property.status}
                            <span style={{backgroundColor: property.color}}></span>
                        </td>
                    </tr>
                ))}
            </tbody>


        </table>
    )
}

Table.propTypes = {
    properties: PropTypes.array.isRequired
}

export default Table