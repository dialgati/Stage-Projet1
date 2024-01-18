import React from 'react'

function SousHotels() {
  return (
    <div>
      <div className="stat-card px-4 col-3 flex-wrap card my-3">
        <div className="d-flex align-items-center justify-content-center">
          <div className="ronde  p-3  d-flex justify-content-center me-4">
            <p className=" fs-4 icon text-dark">{icon}</p>
          </div>
          <div className="">
            <div className="d-flex">
              <h3 className="mx-2">{title}</h3>
              <p className="mt-2">{count}</p>
            </div>
            <p>Je ne sais pas quoi mettre</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SousHotels;