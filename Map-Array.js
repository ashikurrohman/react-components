import React, { Component } from 'react'

export default class Myapp extends Component {
   state=
   { Myarr: [
        {id:1,name:"Ashik",age:22},
        {id:2,name:"Rakib",age:12},
        {id:3,name:"Shofiq",age:32},
    ]
}
   
    render(){
        return(
            <div>
               {this.state.Myarr.map((item)=><div>{item.name}=>{item.age}</div>)}
            </div>
        )
}
}