import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            counts:0
        }
    }
    Increment(){
        this.setState({
            counts:this.state.counts + 1
        })
    }
    Decrement(){
        this.setState({
            counts:this.state.counts -1
        })
    }
    render() {
        return (
            <div>
                <h1>Count Number : {this.state.counts}</h1>
                <button onClick={()=>this.Increment()}>Increment</button>  
                <button onClick={()=>this.Decrement()}>Decrement</button>
            </div>
        )
    }
}
