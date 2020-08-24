import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    createNotes = () => {
        //return here?
        return this.apiResponse().map(function(note){
            return <Note content={note} />
        })
    }


    //alt createNotes method with arrow notation - no second return needed
    // createNotes = () => {
    //     return this.apiResponse().map(note => <Note content={note} />)
    // }

    
    render(){
    console.log(this.createNotes())
    return(
        <ul>
            {this.createNotes()}
        </ul >
    )
    }
}

export default NotesContainer;