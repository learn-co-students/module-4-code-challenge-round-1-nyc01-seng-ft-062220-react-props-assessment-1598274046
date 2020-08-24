import React from 'react'
import Note from "./Note"


class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    
    render(){

     let myNotes = this.apiResponse()
     let listOfNotes = myNotes.map((note)=> <Note content={note}/>)

        return(
        <ul>{listOfNotes}</ul >
        )
    }
}

export default NotesContainer
