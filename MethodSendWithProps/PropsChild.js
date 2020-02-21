import React from 'react'
import ReactProps from './ReactProps'

function PropsChild(props) {
    return (
        <div>
            <button onClick={props.name}>Click Here</button>
        </div>
    )
}

export default PropsChild
