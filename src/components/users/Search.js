import React, { Fragment, useState, useContext } from 'react';

// Context

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    // Create State (Functional)
    
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    } 
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(text === '') {
            alertContext.setAlert('Please enter something', 'light');
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

export default Search;