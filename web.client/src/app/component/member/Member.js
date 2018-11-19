import React  from 'react'

const Member = (props) =>(

    <div className="memberItem">
        <span className="pull-left">{props.firstname + " " + props.lastname}</span>
    </div>
)

export default Member