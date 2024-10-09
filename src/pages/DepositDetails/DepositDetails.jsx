import { useParams } from 'react-router-dom';
import DepositLink from '../../components/Link/DepositLink';
import { activeProperties, closeProperties } from '../../consts';

const DepositDetails = () => {
    const { id } = useParams();
    const allDetails = [...activeProperties,  ...closeProperties]
    const details = allDetails.find((item) => item.id === id)
  return (
    <>
          <h2>Details for Deposit {id}</h2>
          <p>Здесь будет отображена информация о депозите с ID {id}</p>
          <DepositLink link="deposits" title="Back"/>
    </>
  )
}

export default DepositDetails