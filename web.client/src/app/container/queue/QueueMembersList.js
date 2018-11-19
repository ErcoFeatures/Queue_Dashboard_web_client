import React, {Component} from 'react'
import {connect} from 'react-redux'
import MembersList from "../../component/queue/MembersList";

class QueueMembersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }


    render() {
        return (
            <div>
                {
                    this.props.activeQueue && <div>
                        <div className="text-center" style={{fontSize:"23px"}}>
                            <span>{this.props.activeQueue.label}</span>
                        </div>
                        <div  className="queueMembersContainer">
                        <MembersList members = {this.props.activeQueue.members}/>
                        </div>

                    </div>
                }


            </div>
        )
    }
}

const mapStateToProps = ({queues: {activeQueue}}) => {
    return {
        activeQueue
    }
}


export default connect(mapStateToProps, null)(QueueMembersList)