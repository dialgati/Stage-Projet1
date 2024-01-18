import React from "react";
import StatCard from "./StatCard";
import { IoMdMailOpen } from "react-icons/io";
import { BsPaypal } from "react-icons/bs";
import  "./Dashboard.css";

import { FaUserFriends } from "react-icons/fa";

const CardDashboard = () => {
  return (
    <div className="container d-flex flex-wrap  mt-3">
      <div className="row gap-2 ">
        <StatCard
          title="125"
          icon={<IoMdMailOpen />}
          count={"Formulaires"}
          className={"violet"}
        />
        <StatCard title="40" icon={<BsPaypal />} count={"Messages"} className={'vert'} />
        <StatCard title="600" icon={<FaUserFriends />} count={"utilisateurs"} className={'jaune'} />
        <StatCard
          title="25"
          icon={<IoMdMailOpen />}
          count={"E-mails"}
          className={"rouge"}
        />
        <StatCard title="40" icon={<BsPaypal />} count={"Hotels"} className={'sombre'}/>
        <StatCard title="02" icon={<FaUserFriends />} count={"Entites"} className={'blue'}/>
      </div>
    </div>
  );
};

export default CardDashboard;
