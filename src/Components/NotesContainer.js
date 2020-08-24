import React from 'react'
import Note from './Note.js'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render() {
        let noteArray = this.apiResponse().map(noteObj => <Note content={noteObj}/>)
    return(
        
        <ul>
        {noteArray}
        </ul>
    )
    }
}

export default NotesContainer;