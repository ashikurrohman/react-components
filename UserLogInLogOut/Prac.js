import React, { Component } from 'react';
import './style.css'
import User from './User'
import Guest from './Guest'

export class Myapp extends Component {
        state={
            LogedIn: false
        }
    

            LoginFunc = ()=>{
                this.setState({
                    LogedIn:true
                })
                }  

            LogOut = ()=>{
                    this.setState({
                        LogedIn:false
                    })
               }
    render() {
       const values = this.state.LogedIn;
     if(values){
        return <User dailyclik={this.LogOut} />
    
     }else{
         return <Guest dailyclik={this.LoginFunc} />
     }
    
    }
}

export default Myapp
