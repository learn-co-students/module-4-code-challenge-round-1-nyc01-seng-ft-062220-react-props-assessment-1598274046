import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    render() {
        let notesArray = this.apiResponse().map((noteObj, index) => <Note key={index} content={noteObj} />)

        return (
            <ul>{notesArray}</ul>
        )

    }
}

export default NotesContainer




