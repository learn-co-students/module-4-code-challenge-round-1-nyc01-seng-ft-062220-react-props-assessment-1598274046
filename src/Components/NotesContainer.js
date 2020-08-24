import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    
    iteration() {
        return (this.apiResponse().map((note, index)=>
            <Note 
                key={index}
                note={note}
            />
        )
        )
    }

    render() {
        return(
            <ul>
                {this.iteration()} 
            </ul >
        )
    }

}

export default NotesContainer 
