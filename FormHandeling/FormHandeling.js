import React, { Component } from 'react'

export default class FormHandeling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname:'',
             lname:'',
             email:'',
             mobile:'',
             password:''
        }
    }
    
    Onchange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
        event.preventDefault();
    }

    SubmitForm=()=>{

    }
    render() {
        return (
            <div>
                <form onSubmit={this.SubmitForm}>
                    <label>First Name  </label>
                    <input type="text" name="fname" value={this.state.fname} onChange={this.Onchange}/><br/>
                    <label>Last Name  </label>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.Onchange}/><br/>
                    <label>Email Address  </label>
                    <input type="email" name="email" value={this.state.email} onChange={this.Onchange} /><br/>
                    <label>Mobile Number  </label>
                    <input type="text" name="number" value={this.state.number} onChange={this.Onchange}/><br/>
                    <label>Password  </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.Onchange}/><br></br>
                    <input type="submit" value="Submit"/>
                </form>
                <h3>{this.state.fname}</h3>
                <h3>{this.state.lname}</h3>
                <h3>{this.state.email}</h3>
                <h3>{this.state.number}</h3>
                <h3>{this.state.password}</h3>
            </div>
        )
    }
}
