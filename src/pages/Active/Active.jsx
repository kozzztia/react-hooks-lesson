import Title from "../../components/Title/Title.jsx";
import Table from "../../components/Table/Table.jsx";
import { activeProperties } from "../../consts.js";
import DepositLink from "../../components/Link/DepositLink.jsx";

const Active = () => {
  return (
    <>
      <Title text="active deposits" count={activeProperties.length} role="active"/> 
      <Table properties={activeProperties}/>
      <DepositLink link ="" title="Home"/>
    </>
  )
}

export default Active