import React from 'react'
import Note from './Note'

export default class NotesContainer extends React.Component {
    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    
    render() {
        const notes = this.apiResponse()
    return (
        <ul>
            {notes.map(note => <Note content={note} />)}
        </ul>
    )
  }       
}
