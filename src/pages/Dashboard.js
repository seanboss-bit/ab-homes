import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboards from "../components/Dashboard";
import PropertyRent from "../components/PropertyRent";
import PropertyBought from "../components/PropertyBought";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
  const [dasboard, setDashboard] = useState(true);
  const [rent, setRent] = useState(false);
  const [bought, setBought] = useState(false);

  useEffect(() => {
    toast.success(`Welcome ${currentUser?.name}`);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="dashboard">
      <div className={toggle ? "side-main" : "side-main deact"}>
        <Sidebar
          setBought={setBought}
          setDashboard={setDashboard}
          setRent={setRent}
          toggle={toggle}
          setToggle={setToggle}
          currentUser={currentUser}
        />
      </div>
      <div className="side-setting">
        {dasboard && (
          <Dashboards
            toggle={toggle}
            setToggle={setToggle}
            setBought={setBought}
            setDashboard={setDashboard}
            setRent={setRent}
          />
        )}
        {rent && <PropertyRent toggle={toggle} setToggle={setToggle} />}
        {bought && <PropertyBought toggle={toggle} setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default Dashboard;
