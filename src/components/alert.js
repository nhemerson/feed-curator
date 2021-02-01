import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ShowAlert extends Component {
    
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }

    handleModal(){
        this.setState({show: !this.state.show})
    }
    render() {
        return(
            <>
                <Button size="sm" variant="success" onClick={() => {this.handleModal()}}>Track</Button>
                <Modal show={this.state.show} onHide={() => this.handleModal()}>
                    <Modal.Header closeButton>Success!</Modal.Header>
                    <Modal.Body>This media has been added to your domain track.</Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="primary" onClick={() => {this.handleModal()}}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default ShowAlert