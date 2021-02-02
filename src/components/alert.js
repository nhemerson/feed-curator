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
                    <Modal.Header closeButton>Track this Article</Modal.Header>
                    <Modal.Body>
                        Tracking an article means letting our system use machine learning to create a learning track for you around the attributes of this article. 
                        Would you like this function to happen?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="primary" onClick={() => {this.handleModal()}}>Yes</Button>
                        <Button size="sm" variant="primary" onClick={() => {this.handleModal()}}>No</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default ShowAlert