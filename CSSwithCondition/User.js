import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
           <h1 className= {this.props.color}>it's show from User</h1>
        )
    }
}
