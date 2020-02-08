import React, { Component } from 'react'
import Guest from './Guest'
export  const MyContext = React.createContext(); 


export default class Apps extends Component {
    state={
        name:"Ashikur Rohman",
        age : 22,
        father: "Mominul Haque"
        }
    render() {
        return (
          <MyContext.Provider value={this.state}>
              <Guest />
          </MyContext.Provider>
        )
    }
}

