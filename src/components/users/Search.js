import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Context

import GithubContext from '../../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlert }) => {

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

            {showClear && 
            (<button
                className="btn btn-light btn-block"
                onClick={clearUsers}>
                    Clear
            </button>)}

        </Fragment>
    )
}

Search.propTypes = {
    showClear: PropTypes.bool.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search;