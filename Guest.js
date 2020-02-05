import React, { Component } from 'react'

class Guest extends Component{
    render(){
        return (
        <React.Fragment>
            <h1>Register or Login </h1>
              <button onClick={this.props.dailyclik}>Login</button>
              <button>Sigup</button>
        </React.Fragment>
        )
    }
}

export default Guest;