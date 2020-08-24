import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {  

    apiResponse = () => {
        
        return this.props.list.map(function(note){return <Note content={note}/>})
    }
    render(){

    return(
        <ul>{this.apiResponse()}</ul >
     )
    }
}

export default NotesContainer
