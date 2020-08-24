import React from 'react'
import Note from './Note.js'
class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    
    render() {
        let noteList = this.apiReponse().map(noteObj => <Note content={noteObj}/>) //grabs this from Note: <li>{props.content}</li>
        return(
            <ul>{noteList}</ul>
        )
    }

}

export default NotesContainer;