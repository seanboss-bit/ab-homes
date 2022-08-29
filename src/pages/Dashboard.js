import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboards from "../components/Dashboard";
import PropertyRent from "../components/PropertyRent";
import PropertyBought from "../components/PropertyBought";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const [dasboard, setDashboard] = useState(true);
  const [rent, setRent] = useState(false);
  const [bought, setBought] = useState(false);
  return (
    <div className="dashboard">
      <div className={toggle ? "side-main" : "side-main deact"}>
        <Sidebar
          setBought={setBought}
          setDashboard={setDashboard}
          setRent={setRent}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
      <div className="side-setting">
        {dasboard && <Dashboards toggle={toggle} setToggle={setToggle}  setBought={setBought}
          setDashboard={setDashboard}
          setRent={setRent}/>}
        {rent && <PropertyRent toggle={toggle} setToggle={setToggle} />}
        {bought && <PropertyBought toggle={toggle} setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default Dashboard;
