import React, {Component} from 'react'
import {Button} from '../../component/Button'
import {FormattedMessage} from "react-intl";
class AddQueueform extends Component {


    constructor(props) {
        super(props)
        this.state = {
            label: null
        }
        this.onAddClick =this.onAddClick.bind(this);
        this.onResetClick =this.onResetClick.bind(this);
        this.onLabelChange =this.onLabelChange.bind(this);
    }

    onLabelChange(e){
        let value = e.target.value;
        if(value.trim().length > 0){
            this.setState({
                label:value
            })
        }
    }
    onAddClick(){
        let callDescription = 'addQueue';
        let payload = {
            owner: this.props.owner,
            data:{
                label:this.state.label
            }
        };
        this.props.onCreateQueue({payload,callDescription })
    }

    onResetClick(){

    }
    render() {

        return (
            <div>
                {this.props.showNewQueueForm && <div>
                    <input onChange={this.onLabelChange} type="text" placeholder="Queue's name" className="form-control" style={{borderRadius: "3px"}}/>
                    <Button className="btn btn-secondary psn-btn" onClick={() => {}}>
                        Reset
                    </Button>
                    <Button disabled={this.state.showWarning} className="btn btn-primary psn-btn"  onClick={this.onAddClick}>
                        Add
                    </Button>
                </div>}</div>
        )
    }

}


export default AddQueueform;