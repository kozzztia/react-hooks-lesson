import Title from "../../components/Title/Title.jsx";
import Table from "../../components/Table/Table.jsx";
import { activeProperties, closeProperties } from "../../consts.js";
import DepositLink from "../../components/Link/DepositLink.jsx";

const Home = () => {
  return (
    <>
      <Title text="active deposits" count={activeProperties.length} role="active"/> 
      <Table properties={activeProperties}/>
      <DepositLink link="active"/>

      
      <Title text="closed deposits" count={10}/>
      <Table properties={closeProperties}/>
      <DepositLink link="closed"/>

    </>
  )
}

export default Home