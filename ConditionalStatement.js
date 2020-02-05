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
         return <div>Hello you are logged in</div>
     }else{
         return <div>You are not logged in</div>
     }
    }
}

export default Myapp
