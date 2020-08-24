import React from 'react'


function Note(props) {
    console.log("Notes props:", props)
    return <li>{props.content}</li>
}

export default Note