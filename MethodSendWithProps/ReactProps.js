import React, { Component } from 'react'
import PropsChild from './PropsChild'

class ReactProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Ashikur Rohman"
        }
        this.clicks = this.clicks.bind(this)
    }
    
    clicks=()=>{
        alert(`${this.state.name}`)
    }
    render() {

        return (
            <div>
                <PropsChild name={this.clicks}/>
            </div>
        )
    }
}
export default ReactProps;