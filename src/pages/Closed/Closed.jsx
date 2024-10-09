import Title from "../../components/Title/Title.jsx";
import Table from "../../components/Table/Table.jsx";
import { closeProperties } from "../../consts.js";
import DepositLink from "../../components/Link/DepositLink.jsx";

const Closed = () => {
  return (
    <>
      <Title text="closed deposits" count={closeProperties.length} role="closed"/> 
      <Table properties={closeProperties}/>
      <DepositLink link="" title="Home"/>
    </>
  )
}

export default Closed