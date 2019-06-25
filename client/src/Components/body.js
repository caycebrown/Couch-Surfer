import React from 'react';
import Menu from './menu';
import Main from './main';

const Body = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-1" id="menu">
                <Menu />
            </div>
            <div className="col-11" id="main">
                <Main />
            </div>
        </div>
    </div>
)

export default Body;