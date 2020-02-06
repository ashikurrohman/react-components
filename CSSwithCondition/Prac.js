import React, { Component } from 'react'
import User from './User'
import './style.css'

export default class Myapp extends Component {
    render() {
    const style = false;
        return (
            <React.Fragment>
                <h1 className="myclass">My name is Ashikur Rohman</h1>
                <User color={style ? "myclass":"second"} />
            </React.Fragment>
        )
    }
}

