import React from 'react'
import logo from '../images/logo .png';
import {Link} from 'react-router-dom';
function Inscription() {
  return (
    <div className="inscription ">
      <div className="reduire">
        <div className="text-center">
          <img className="img-fluid" src={logo} alt="" />
        </div>
        <div className="container  w-50">
          <div className="row justify-content-center">
            <form className="col-md-6 mt-4 bg-white center shadow-3 p-3 rounded-1">
              <h5 className="mb-3">Inscrivez en tant que admin</h5>
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Nom"
                />
              </div>
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
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Accepter les termes et la politique
                </label>
              </div>
              <button type="submit" className="btn gris w-100">
                S'inscrire
              </button>
            </form>
            <p className="text-center text-white mt-3">
              Vous avaez déjà un compte?
              <Link
                to="/"
                className="text-decoration-none text-warning"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;