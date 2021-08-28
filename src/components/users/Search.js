import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Context

import GithubContext from '../../context/github/githubContext';
import Users from './Users';

const Search = ({ setAlert }) => {

    const githubContext = useContext(GithubContext);

    // Create State (Functional)
    
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    } 
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(text === '') {
            setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    return (
        <Fragment>
        
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="text"
                    placeholder="Search Users" 
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>

            {githubContext.users.length > 0 && (
                <button
                    className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}>
                    Clear
                </button>
            )}

        </Fragment>
    )
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default Search;