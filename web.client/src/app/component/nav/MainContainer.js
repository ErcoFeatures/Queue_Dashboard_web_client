import React from 'react'
import AddForm from '../../container/queue/AddForm'
import QueueMembersList from '../../container/queue/QueueMembersList'

const MainContainer = (props) => {

    return (
        <div className="main-content">
            <AddForm/>
            <div className="queueMembers">

                <QueueMembersList/>

            </div>
        </div>
    )
}


export default  MainContainer;