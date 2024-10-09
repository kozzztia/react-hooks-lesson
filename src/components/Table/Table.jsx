import PropTypes from "prop-types";
import DepositLink from "../Link/DepositLink";



import styles from "./styles.module.css";
import { tableProperties } from "../../consts";

const Table = ({ properties, linked }) => {
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
                        <td >
                            <div>
                                <img src={property.userIcon} alt="userInon" />
                                <span><p>{property.property}</p><p>{property.city}</p></span>
                            </div>
                        </td>

                        <td >{property.moveInDate}</td>
                        <td >{property.rent}</td>
                        <td >{property.deposit}</td>
                        
                        <td >
                            <div><p>{property.status}</p>
                                {
                                    linked ? <DepositLink link={`deposits/${property.id}`} title="Details" /> :
                                        <span style={{ backgroundColor: property.color }}></span>
                                }
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>


        </table>
    )
}

Table.propTypes = {
    properties: PropTypes.array.isRequired,
    linked: PropTypes.bool,
}

export default Table