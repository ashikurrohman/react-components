import React, { Component } from 'react'

export default class FormSubmit extends Component {
    constructor(props) {
        super(props)
        this.state = {
             value:''
        }
        this.Myref = React.createRef();
    }
    SubmitForm=(event)=>{
        event.preventDefault();
        this.setState({
            value: this.Myref.current.value
        })
    }

    render() {

        return (
            <div>
                <h1>Value Is : {this.state.value}</h1>
                <form onSubmit={this.SubmitForm}>
                    <input type="text" ref={this.Myref}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
