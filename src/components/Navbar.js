import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill, BsBasketFill } from 'react-icons/bs';
import { FaHome } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark border-bottom border-body sticky-top" data-bs-theme="dark">
        <div className="container-fluid">
       
          <h2 style={{ color: 'white' }}>Jaggery world</h2>
          
          <div className="d-flex justify-content-end" style={{ color: 'white', fontSize: '30px', cursor: 'pointer' }}>
        <div className="mx-4">
              <Link className="nav-link" to="/BsHospitalFill">
              <FaHome />
              </Link>
            </div>
            <div className="mx-4">
              <Link className="nav-link" to="/Bsfillpersonfill">
                <BsFillPersonFill />
              </Link>
            </div>

            <div className="mx-3">
              <BsBasketFill />
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactUs">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/AboutUs">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Rewards">
                    Rewards
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </div>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/PlainJaggery">
                        Plain Jaggery
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/JaggeryCubes">
                        Jaggery Cubes
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/JaggeryPowder">
                        Jaggery Powder
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/FlavouredJaggery">
                        Flavoured Jaggery
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Combos">
                        Combos
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
