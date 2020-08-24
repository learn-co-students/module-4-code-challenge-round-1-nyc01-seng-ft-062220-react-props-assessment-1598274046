import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = ["First Note", "Second Note", "Third Note", "Fourth Note"]

    render() {
    
        let allNotes = this.apiResponse.map(note => <Note content={note}/>)

        return(
            <ul> {allNotes} </ul >
        )    
    }
}

export default NotesContainer
