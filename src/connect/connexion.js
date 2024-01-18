import React from "react";
import logo from "../images/logo .png";
import {Link} from 'react-router-dom';
function Connexion() {
  return (
    <div className="inscription ">
      <div className="bas">
        <div className="text-center">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <div className="container  w-50">
          <div className="row justify-content-center">
            <form className="col-md-6 mt-4 bg-white center shadow-3 p-3 rounded-1">
              <h5 className="mb-3">Connectez en tant que admin</h5>
              <div className="mb-5">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="form-control border-0"
                  placeholder="Mot de passe"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input fs-5"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Accepter les termes et la politique
                </label>
              </div>
              <button Link to='/Dashboard' type="submit" className="btn gris w-100">
                Se connecter
              </button>
            </form>
            <p className="text-center text-white mt-3">
              Vous n'avaez pas de compte?
              <Link to="/inscription" className="text-decoration-none text-warning">Inscrivez-vous ici</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
