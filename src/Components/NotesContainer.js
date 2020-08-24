import React from 'react'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    return(
        <div className="notes-container"
        <ul>
            <Note content={apiResponse[0]}/>
            <Note content={apiResponse[1]}/>
            <Note content={apiResponse[2]}/>
            <Note content={apiResponse[3]}/>
        </ul>
        </div>
    )

}
