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
        
        this.state = {
            showModal: false
        }
        
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    createTest(){
        var data = {
            first_name: 'daniel',
            last_name: 'zheng',
            user_email: '1234@gmail.com',
            user_pass: 'oasdfjaasdofjoaj',
            user_level: 1
        }
        var obj = new FormData();
        obj.append("json", JSON.stringify(data));

        createUser(data);
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

        var login= <a>Have an account</a>
	
	    return (
	      <div>
            <div onClick={this.open}>{this.props.text}</div>
	        <Button type="button" onClick={this.createTest} >test</Button>
	
	        <Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>Sign Up</Modal.Title>
	          </Modal.Header>
                <form method="post" onSubmit={createUser}>
	                <Modal.Body>
                        <FieldGroup
                          id="formControlsEmail"
                          type="email"
                          label="Email address"
                          placeholder="Enter email"
                        />
                        <FieldGroup
                          id="formControlsText"
                          type="text"
                          label="First Name"
                          placeholder="First Name"
                        />
                        <FieldGroup
                          id="formControlsText"
                          type="text"
                          label="Last Name"
                          placeholder="Last Name"
                        />
                        <FieldGroup
                          id="formControlsPassword"
                          label="Password"
                          type="password"
                        />
                        <SignIn text={login} />
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

