import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    
    }
    ChangeMet= (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    formSubmit=(event)=>{
        alert(`My name is ${this.state.name}`)
        event.preventDefault();
     }
    render() {
        return(
            <div>
                <div>
                    <h1>Sign UP Here</h1>
                </div>
            <form onSubmit={this.formSubmit}>
                <label>First Name</label>
                <input  type="text"  name="name" value={this.state.name}onChange={this.ChangeMet}/><br/>
                <label>Email Adress</label>
                <input  type="email" name="email" onChange={this.ChangeMet}/><br/>
                <label>Password</label>
                <input  type="password" name="password" /><br/>
                <input type="submit"/>
            </form>
    
         </div>
        )
        
    }
}


