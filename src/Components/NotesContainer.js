import React, { Component } from "react";
import Note from './Note.js'

class NotesContainer extends Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render() {
        return(
        <ul>{}</ul>
        )
    }

}

export default NotesContainer