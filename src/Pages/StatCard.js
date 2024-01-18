// StatCard.js
import React from "react";
const StatCard = ({ title, count, icon,className, }) => {
  return (
    <div className="stat-card pt-2 d-flex align-items-center col-3 flex-wrap card my-3">
      <div className="d-flex">
        <div className={className}>
          <p className=" fs-1 ">{icon}</p>
        </div>
        
        <div className="">
          <div className="d-flex">
            <h3 className="mx-2">{title}</h3>
            <p className="mt-2">{count}</p>
          </div>
          <p className="text">Je ne sais pas quoi mettre</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;

//  <p className=" fs-1 text-dark m-auto">{icon}</p>;