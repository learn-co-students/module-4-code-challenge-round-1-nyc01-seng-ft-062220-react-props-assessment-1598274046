
import React from 'react'
import Note from './Note.js'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    render() {
      //need to map over the api response here ran out of time
        return(
            <div>
                <ul>
                    <li>
                    
                    </li>
                </ul >

            </div>
            
        )
    }
}

export default NotesContainer;


// The NotesContainer component has an apiResponse method that returns an array of notes

// Each Note component should be able to access the content key inside of its props and print the value of the content key to the DOM as a li tag

// The NotesContainer should be rendered underneath the Header on the DOM