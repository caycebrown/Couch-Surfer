import React from 'react';
import './search-body.css';
import Menu from './menu';
import SearchBar from './search-bar';
import Couch2 from '../images/couch&books.jpg';


const SearchBody = () => (
    <div className="container-fluid">
    <div className="row">
        <div className="col-1" id="menu">
            <Menu />
        </div>
        <div className="col-11" id="main">
            <SearchBar />
            <img src={Couch2}></img>
        </div>
    </div>
    </div>  
)

export default SearchBody;