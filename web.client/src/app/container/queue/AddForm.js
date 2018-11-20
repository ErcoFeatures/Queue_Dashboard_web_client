import React from 'react'
import {connect} from 'react-redux'
import AddQueueform from "../../component/queue/AddQueueform";
import {createQueue} from "../../actions/queues";


const AddForm  = (props) => {
    return (
        <AddQueueform {...props}/>
    )
};



const  mapStateToProps= ({auth: {userObject}, queues: {showNewQueueForm}}) =>({
    owner:userObject.userDetails.UserID,
    showNewQueueForm
});


const  mapDispatchToProps = dispatch => ({
    onCreateQueue : (data) => dispatch(createQueue(data))
})

export default connect(mapStateToProps , mapDispatchToProps)(AddForm);