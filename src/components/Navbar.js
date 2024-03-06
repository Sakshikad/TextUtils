import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import About from "./About";

function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"> About </Link>
                            </li>
                        </ul>
                        {/* Move the Dark Mode switch and label to the extreme right */}
                        <div className="ms-auto">
                            <div className={`form-check form-switch d-flex align-items-center text-${props.mode==='light'?'dark':'light'}`}>
                              
                                <input className="form-check-input me-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
};
export default Navbar;
