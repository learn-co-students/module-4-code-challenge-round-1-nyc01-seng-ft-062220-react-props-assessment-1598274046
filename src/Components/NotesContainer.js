import React, { Component } from "react";
import Note from './Note.js'

class NotesContainer extends Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render() {
        const noteArray = this.apiResponse().map((noteObject) => <Note content={noteObject}/>)
        return(
            <ul>{
                noteArray
            }
            </ul>
        )
    }
    
}

export default NotesContainer