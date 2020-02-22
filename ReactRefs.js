import React, { Component } from 'react'

export default class ReactRefs extends Component {
    constructor(props) {
        super(props)
    
        this.ItsRefs = React.createRef();
    }
    componentDidMount=()=>{
        this.ItsRefs.current.focus();
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Name</label><br/>
                    <input type="text" ref={this.ItsRefs} /><br/>
                    <label>Password</label><br/>
                    <input type="text" /><br/>
                    <label>Email</label><br/>
                    <input type="text" />
                </form>
            </div>
        )
    }
}
