import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Menu = () => (
    <div id='menu'>
        <div className="menu-item"><Link to="/"><a href="/Home"><FontAwesomeIcon icon={faHome}/></a></Link></div>
        <div className="menu-item"><Link to="/search"><a href="/search"><FontAwesomeIcon icon={faSearch}/></a></Link></div>
        <div className="menu-item"><a href="/search"><FontAwesomeIcon icon={faCalendarAlt}/></a></div>
        <div className="menu-item"><a href="/search"><FontAwesomeIcon icon={faCalendarAlt}/></a></div>
    </div>
)

export default Menu;