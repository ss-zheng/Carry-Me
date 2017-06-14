import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import {FieldGroup} from './Form';

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            showModal: false
        }
        
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.switch = this.switch.bind(this);
    }
    
    open(){
        this.props.togglefunc(true, false);
    }

    close(){
        this.props.togglefunc(false, false);
    }
    
    switch(){
        this.props.togglefunc(false, true);
    }

	render() {
	    const popover = (
	      <Popover id="modal-popover" title="popover">
	        very popover. such engagement
	      </Popover>
	    );
	    const tooltip = (
	      <Tooltip id="modal-tooltip">
	        wow.
	      </Tooltip>
	    );
	
	    return (
	      <div>
            <div onClick={this.open}>{this.props.text}</div>
	
	        <Modal show={this.props.visible} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>Sign In</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
                <form>
                    <FieldGroup label="Email Address" content="user_email" placeholder="email address" type="email"/>
                    <FieldGroup label="Password" content="user_pass" placeholder="password" type="password"/>

                    <Checkbox>
                         Remember Me
                    </Checkbox>

                    <a href=''>Forgot password?</a>
                    
                    <a onClick={this.switch}>Create an account</a>
                </form>
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.close}>Sign In</Button>
	            <Button onClick={this.close}>Cancel</Button>
	          </Modal.Footer>
	        </Modal>
	      </div>
	    );
	  }
}

SignIn.defaultProps = {
    text: 'Sign In'
}
