import React from 'react'


function Note(props) {

    return (
        <div>
        <li>{props.note[0]}</li>
        <li>{props.note[1]}</li>
        <li>{props.note[2]}</li>
        <li>{props.note[3]}</li>
        </div>

        //Yeeeaaah.... I know this is wrong :/ I'm having trouble getting iteration to work in React.
    )
}

export default Note