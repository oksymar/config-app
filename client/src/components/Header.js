import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <NavLink to="/" exact className="item">
                Configuration List
            </NavLink>
            <NavLink to="/configuration/edit" exact className="item">
                Edit Configuration
            </NavLink>
            <NavLink to="/logs" exact className="item">
                Logs
            </NavLink>
        </div>
    );
};

export default Header;