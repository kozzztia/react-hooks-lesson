import Title from "../../components/Title/Title.jsx";
import Table from "../../components/Table/Table.jsx";
import { activeProperties, closeProperties } from "../../consts.js";
import DepositLink from "../../components/Link/DepositLink.jsx";

const Home = () => {
  
  return (
    <>
      <Title text="active deposits" count={activeProperties.length} role="active"/> 
      <Table properties={activeProperties.slice(0, 3)}/>
      <DepositLink link="active" title="All active deposits" />

      
      <Title text="closed deposits" count={closeProperties.length}/>
      <Table properties={closeProperties.slice(0, 3)}/>
      <DepositLink link="closed" title="All closed deposits"/>

    </>
  )
}

export default Home