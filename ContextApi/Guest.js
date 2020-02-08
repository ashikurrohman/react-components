import React, { Component } from 'react'
import Prac, { MyContext } from './Prac'

export default class componentName extends Component {
    render() {
        return (
        <h4><MyContext.Consumer>
            {data=>
            <p>My name is {data.name}. I am {data.age} years old. My father name is {data.father}. </p>
            }
            </MyContext.Consumer>
            </h4>
        )
    }
}

