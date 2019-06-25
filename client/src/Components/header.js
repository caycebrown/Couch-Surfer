import React from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCouch } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
    <div className="conainter-fluid">
        <div className="row" id="header">
            <div className="col" id="logo">
                <div className="row">
                    <FontAwesomeIcon icon={faCouch}/><h3>Couch Surfer</h3>
                </div>
            </div>
            <div className="col"></div>
            <div className="col" id="login">
                <div className="row"><h3>Login&nbsp;</h3><h3>&nbsp;Sign Up</h3></div>
            </div>
        </div>
    </div>
)

export default Header;


