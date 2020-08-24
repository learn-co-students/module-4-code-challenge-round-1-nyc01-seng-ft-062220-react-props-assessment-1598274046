import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    
    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    

    render() {
        
        return(
            <ul>
            {this.apiResponse().map((note, index) => 
            <Note 
            key={index}
            content={note}/>)}
            </ul >
        )
    
    }

}

export default NotesContainer
