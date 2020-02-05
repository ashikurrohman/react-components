import React, { Component } from 'react'

class User extends Component {
    render() {

        return (
           <React.Fragment>
                <div>
                <h1>Hello, Ashikur Rohman</h1>
                <button onClick={this.props.dailyclik}>Logout</button>
            </div>
           </React.Fragment>
        )
    }
}
export default User;
