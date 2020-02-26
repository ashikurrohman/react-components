import React, { Component } from 'react'

class FormHandelings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:'',
             password:''
        }
    }
    Hendeler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.Hendeler}/><br></br> 
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.Hendeler}/><br></br>
                     <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.Hendeler}/><br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default FormHandelings;