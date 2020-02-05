import React, { Component } from 'react';
import './style.css'


export class Myapp extends Component {
    constructor(props){
        super(props)
        this.state={
            values: false
        }
    }
    render() {
       
     if(this.state.values){
        
         const result = <div>you are logged in</div>
         return <div><h1>Hello, {result}</h1></div>
     }else{
         const result =  <div>Register Form Here</div>
         return <div><h1>Hello, {result}</h1></div>
     }
    
    }
}

export default Myapp
