import React from 'react'

function Counter() {
    const persons =[
        {   id:1,
            name:"Ashik",
            age:23,
            skill:React
    },   
     {      id:2,
            name:"Pentester",
            age:24,
            skill:"JavaScript"
    },  
      {     id:3,
            name:"Betler",
            age:28,
            skill:"Python"
    }, 
       {    id:4,
            name:"Rahul",
            age:33,
            skill:"Java"
    }
    ]
 
    const Person = persons.map(person=>(
      
    <h5>Hi i am {person.name}. I am {person.age} Years Old.</h5>
   
    ))
   
    return (
    <div>
         <ul>
                 {Person}
         </ul> <br />
          <ul>
                 {Person}
         </ul>
    </div>)
}
export default Counter;
