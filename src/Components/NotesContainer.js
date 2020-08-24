import React from 'react'
import Note from './Note'
class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }
    let notes = apiResponse.map(function (note){Note(note)}

    return( 
        <div>

            <ul>{notes}</ul >

            </div>
    )

}
