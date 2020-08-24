import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    
    
    render(){
        const apiRes = this.apiResponse()
        const note = apiRes.map((item) => <Note content={item}/>)

        return(
            <ul>
                {note}
            </ul>
        )
    }
}

export default NotesContainer;