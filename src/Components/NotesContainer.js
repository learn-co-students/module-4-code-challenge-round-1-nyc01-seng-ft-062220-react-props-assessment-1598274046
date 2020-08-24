import React from 'react'
import Note from './Note.js'
class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    
    noteList = () => {
       return this.apiReponse().map(Note => <li>Note</li>)
    }

    render() {
        return(<ul>{this.noteList()}</ul>)
    }

}

export default NotesContainer;