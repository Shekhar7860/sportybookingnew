import React from 'react'
import logoheader from '../assets/images/logo-small-transparent.svg'
import { Link } from 'react-router-dom'
import entype from '../assets/images/image 12.png'
import mobilelogo from '../assets/images/Logotype.png'

const Header = () => {
    return (
        <div>
            {/* Header start here */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand desktopViwe">
                <Link to="/"><img src={logoheader}/></Link>
                </a>
                <a className="navbar-brand mobileViwe">
                <Link to="/"><img src={mobilelogo}/></Link>
                </a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars" />
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item en-type">
                      <a className="nav-link"><img src={entype} /></a>
                    </li>
                    <li className="nav-item manage-facility desktopViwe">
                      <Link className="nav-link" to="/">Manage Facility</Link>
                    </li>
                    <li className="nav-item manage-facility mobileViwe">
                      <Link className="nav-link" to="/">Facility</Link>
                    </li>
                    <li className="nav-item login">
                    <Link className="nav-link" to="/">Login</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header End here */}
        </div>
    )
}

export default Header
