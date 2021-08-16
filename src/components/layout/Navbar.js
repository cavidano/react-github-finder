import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon}></i>
                <span style={{marginLeft: '0.5em'}}>{props.title}</span> 
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Project Name',
    icon: 'far fa-smile'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar;