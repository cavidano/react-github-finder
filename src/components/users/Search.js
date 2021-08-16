import React, { Component, Fragment } from 'react'

class Search extends Component {
    
    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    } 
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
    }
    
    render() {
        return (
            <Fragment>

                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users" 
                        value={this.state.text}
                        onChange={this.onChange}
                        />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                
            </Fragment>
        )
    }
}

export default Search;