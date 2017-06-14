import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import SignIn from './SignIn';
import {createUser} from './Query';
import {FieldGroup} from './Form';


export default class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.switch = this.switch.bind(this);
    }
    
    open(){
        this.props.togglefunc(false, true);
    }

    close(){
        this.props.togglefunc(false, false);
    }
    
    switch(){
        this.props.togglefunc(true, false);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        var theForm = 
            document.getElementById("sign-up");
        var user = new FormData(theForm);
        console.log(theForm);
        console.log(user);
        // createUser(user);
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
	            <Modal.Title>Sign Up</Modal.Title>
	          </Modal.Header>
                <form method="post" action="http://localhost:3001/api/carry_me/users">
                    <Modal.Body>
                        <FieldGroup label="Email Address" content="user_email" placeholder="email address" type="email"/>
                        <ul className="user-name">
                            <li>
                                <FieldGroup label="First Name" content="first_name" placeholder="first name" type="txt"/>
                            </li>
                            <li>
                                <FieldGroup label="Last Name" content="last_name" placeholder="lastname" type="txt"/>
                            </li>
                        </ul>
                        <FieldGroup label="Password" content="user_pass" placeholder="password" type="password"/>
                        <a onClick={this.switch}>Have an account</a>
                    </Modal.Body>
                    <Modal.Footer>
	                    <Button type="submit">Sign Up</Button>
	                    <Button onClick={this.close}>Cancel</Button>
                    </Modal.Footer>
                </form>
	        </Modal>
	      </div>
	    );
	  }
}

SignUp.defaultProps = {
    text: 'Sign Up'
}

