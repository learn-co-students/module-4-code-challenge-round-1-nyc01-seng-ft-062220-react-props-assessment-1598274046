import React from 'react'
import Note from './Note.js'

export default class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    generateInnerJSX = () => {
        return (this.apiResponse().map((note,index) => 
        <Note 
            key={index}
            note={note} 
        />))
    }

    render () {
        return(
            <ul>
                {this.generateInnerJSX()}
            </ul>
        )
    }
}
