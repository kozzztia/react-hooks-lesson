import { useParams } from 'react-router-dom';
import DepositLink from '../../components/Link/DepositLink';
import { activeProperties, closeProperties } from '../../consts';
import Title from '../../components/Title/Title'; 
import styles from './styles.module.css';
const DepositDetails = () => {
    const { id } = useParams();
    const allDetails = [...activeProperties, ...closeProperties]
    const detail = allDetails.find((item) => item.id === id)
    console.log(detail)
    return (
        <div className={styles.details}>
            <Title text="Deposit details" count={id} />
            <img src={detail.userIcon} alt="userIcon" />
            <article>
                <p>there is information of deposit number: {id}</p>
                <p> date: {detail.moveInDate}</p>
                <p>rent: {detail.rent}</p>
                <p>deposit: {detail.deposit}</p>
                <p>status: {detail.status}</p>
            </article>
            <DepositLink link="deposits" title="Back" />
        </div>
    )
}

export default DepositDetails