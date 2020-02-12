import React,{Component} from 'react';

class Deep extends Component{
    state = {
        name: "Ashikur Rohman",
        id: 24
    }
    Clicks = ()=>{
        this.setState({name:"Rakibul Hasan",id: 25})
    }
    makeFunc = () => {
        this.Clicks(this.state.id)
    }
    render() {
        return (
            <div>
                <h1>Hi, {this.state.name} and i am {this.state.id} years old.</h1>
                <button onClick={this.makeFunc}>Click Here</button>
            </div>
        )
    }
}
export default Deep;
