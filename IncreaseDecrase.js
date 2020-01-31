import React,{Component} from 'react';

export default class IncDec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:10
        }
    }
    increase=()=>{
        this.setState({
            count:this.state.count +1
        })
        
    }
    deccrease = () => {
        this.setState({
            count:this.state.count -1
        })
        
    }
    render() {
        return (
            <div>
                <button onClick={this.deccrease}>Decrase</button>
                <h1>Click here to Change Data : {this.state.count}</h1>
                <button onClick={this.increase}>Incrase</button>
            </div>
        )
    }
}

