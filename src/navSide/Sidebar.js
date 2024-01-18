import React from 'react'
import paper from '../images/paper.png'
import { MdDashboard } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import Small from '../images/Small.png';
import { PiUserCircleDuotone } from "react-icons/pi";


function Sidebar() {
  return (
    <div className="sidebar d-flex fixed flex-wrap justify-content-center text-white">
      <div className="bas">
        <div className="d-flex justify-content-center align-items-center">
          <img className="logo" src={paper} alt="" />
          <p className="ms-3 text-white fw-bolder fs-4">Sénégal Hôtel</p>
        </div>
        <h5 className="mt-4 fw-light">Principal</h5>
        <div className="d-flex mt-4">
          <MdDashboard className="fs-3" />
          <a className="ms-3 text-decoration-none text-light" href="#">
            Dashboard
          </a>
        </div>
        <div className="d-flex mt-4 ">
          <FaComputer className="fs-3" />
          <a className="ms-3 text-decoration-none text-light" href="#">
            Liste des hôtels
          </a>
        </div>

        <div className="d-flex profil align-items-center">
          <div className="truc ">
            <PiUserCircleDuotone className="fs-1 mb-3" />
          </div>
          <div className="d-flex flex-column  ms-2">
            <div className="div">
              <p className="fs-5">Jahreuf</p>
            </div>
            <p className="text-secondary">
              <span>
                <img src={Small} className="pe-2 img-fluid" alt="" />
              </span>
              en ligne
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar