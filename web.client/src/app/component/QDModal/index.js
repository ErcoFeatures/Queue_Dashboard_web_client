import React  from 'react'
import { Button, Modal } from "react-bootstrap";


const QDModal =(props) => {


    return (

            <Modal show={props.showNewQueueForm}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {props.children}
                </Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </Modal>
    )
}


export default QDModal;