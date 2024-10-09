import { activeProperties, closeProperties } from "../../consts";
import { Outlet } from "react-router-dom";
import Title from "../../components/Title/Title";
import Table from "../../components/Table/Table";


const Deposits = () => {
    const deposits = [
          ...activeProperties,
          ...closeProperties,
    ]
  return (
    <>
        <Title text="All deposits" count={deposits.length} role="closed"/> 
          {/* <Table properties={[deposits]} linked/> */}
          <Table properties={deposits} linked/>
      <Outlet/>
    </>
  )
}

export default Deposits