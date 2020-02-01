import React, { Component } from 'react';
export default class IncDec extends Component{
    constructor(props){
        super(props);
        this.state = {
            event:''
        }
    }
    eventHandelar = (event) => {
        this.setState({
           name:event.target.value
       })
    }
    render(){
        return (
            <div>
            <input onChange={this.eventHandelar} value={this.state.name} type="text" placeholder="Write Anything"></input>
            {this.state.name ? <p>Hello,{this.state.name}</p> : ''}
            </div> 
        )
    }
}
