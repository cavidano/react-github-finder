import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

// Context

import GithubContext from '../../context/github/githubContext';

// Components

import UserItem from './UserItem';

const Users = () => {
    
    // Initialize Context
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users;