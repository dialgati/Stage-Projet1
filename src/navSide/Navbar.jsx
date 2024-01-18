import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";
import { PiUserCircleDuotone } from "react-icons/pi";

function navbar() {
  return (
    <div>
      <nav class="navbar shadow-sm bg-white navbar-expand-lg align-items-center">
        <div class="container-fluid ">
          <p class="navbar-brand fs-4 pt-3">Dashboard</p>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex position-relative" role="search">
              <input
                class="form-control text-secondary focus me-5 rounded-4"
                type="search"
                placeholder="Rechercher..."
                aria-label="Search"
              />
            </form>
          </div>
          <div className="d-flex">
            <div className="dr fs-4">
              <FaRegBell />
            </div>
            <div className="dr mx-3">
              <PiUserCircleDuotone className="fs-1" />
            </div>
            <div className="dr fs-4">
              <PiSignOutBold />
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-white  shadow-sm">
        <div className="p-1">
          <h1 className='fw-light'>Bienvenue sur Hotel Sénégal</h1>
          <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
export default navbar;