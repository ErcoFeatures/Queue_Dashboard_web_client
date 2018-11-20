import React from 'react'
import QDNav from '../../component/nav'
import {connect} from 'react-redux'
import {setShowNewQueueForm} from '../../actions/queues'

 const Header = (props) => {
    return (
        <div>
            <QDNav {...props}/>
        </div>
    )
 }



const  mapDispatchToProps = dispatch => ({
    setShowNewQueueForm : (data) => dispatch(setShowNewQueueForm(data))
    })


 export default  connect(null, mapDispatchToProps)(Header);