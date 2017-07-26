import logo from './logo.svg';
import Package1 from './package1.svg';
import Package2 from './package2.svg';
import Package3 from './package3.svg';
import Cross from './cross.svg';
import React from 'react';
import NavLink from 'react-router-dom/NavLink'; 
import {createAccount} from './Query'

// <img src={logo} className="App-logo" alt="Home" />
function hideAway () {
    var modal = document.getElementById("modal-signup");
    modal.classList.remove("is-open");
}

// DropDown {{{
class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "Eng"
        }

        this.switchtoCN = this.switchtoCN.bind(this);
        this.switchtoEng = this.switchtoEng.bind(this);
    }

    switchtoCN(e) {
        e.preventDefault();
        this.setState(() => {
            return {content: "中文"};
        })
    }

    switchtoEng(e) {
        e.preventDefault();
        this.setState(() => {
            return {content: "Eng"};
        })
    }

    render() {
        return (
            <div className='dropdown' style={{cursor: 'pointer'}}>
                <a>{this.state.content} &#8910;</a>
                <div className='dropdown-content'>
                    <a href='/cn' onClick={this.switchtoCN}>中文</a>
                    <a href='/' onClick={this.switchtoEng}>Eng</a>
                </div>
            </div>
        )
    }
}
// }}}

// sign up {{{
class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn () {
        hideAway();
        var modal = document.getElementById("modal-signin");
        modal.classList.add("is-open");
    }

    onSubmit () {
        var resinfo = document.querySelector("#modal-signup .errinfo");
        var data = document.querySelectorAll("#modal-signup input");
        var user = {
            "user_name": data[0].value,
            "user_email": data[1].value,
            "user_pass": data[2].value
        }
        createAccount(user)
            .then(res => {
                console.log(res)
                if (res) {
                    resinfo.innerHTML = "Connection Error";
                } else {
                    hideAway();
                }
            }
        );
    }
    
    render() {
        return (
            <div style={{display:"inline-block"}}>
                <div className="modal" id="modal-signup"> 
                    <div className="modal-content">
                        <img src={Package1} className="modal-decorate" id="modal-decoration1" alt="pac1" />
                        <img src={Package2} className="modal-decorate" id="modal-decoration2" alt="pac2" />
                        <img src={Package3} className="modal-decorate" id="modal-decoration3" alt="pac2" />
                        <a onClick={hideAway}><img src={Cross} id="modal-close" alt="cross" /></a>
                        <div className="modal-header">
                        </div>
                        <div className="modal-body">
                            <form className="body-right"> 
                                <div className="modal-entry">
                                    <input name="user-name" type="text" placeholder="User Name" />
                                </div>
                                <div className="modal-entry">
                                    <input name="user-email" type="email" placeholder="Email" />
                                </div>
                                <div className="modal-entry">
                                    <input name="user-pass" type="password" placeholder="Password" />
                                </div>
                            </form>
                            <div className="body-left"> 
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="errinfo"></div>
                            <a style={{cursor: "pointer", color: "CadetBlue", display: "block"}} onClick={this.onSignIn}>already have an account</a>
                            <button onClick={this.onSubmit} type="button" className="btn">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//}}}

// sign in {{{
class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.hideAway = this.hideAway.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }

    hideAway () {
        var modal = document.getElementById("modal-signin");
        modal.classList.remove("is-open");
    }

    onSignUp () {
        this.hideAway();
        var modal = document.getElementById("modal-signup");
        modal.classList.add("is-open");
    }

    render() {
        return (
            <div style={{display:"inline-block"}}>
                <div className="modal" id="modal-signin"> 
                    <div className="modal-content">
                        <img src={Package1} className="modal-decorate" id="modal-decoration1" alt="pac1" />
                        <img src={Package2} className="modal-decorate" id="modal-decoration2" alt="pac2" />
                        <img src={Package3} className="modal-decorate" id="modal-decoration3" alt="pac2" />
                        <a onClick={this.hideAway}><img src={Cross} id="modal-close" alt="cross" /></a>
                        <div className="modal-header">
                        </div>
                        <div className="modal-body">
                            <div className="body-right"> 
                                <div className="modal-entry">
                                    <input name="user-email" type="email" placeholder="Email" />
                                </div>
                                <div className="modal-entry">
                                    <input name="user-pass" type="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="body-left"> 
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a style={{cursor: "pointer", color: "CadetBlue", display: "block"}} onClick={this.onSignUp}>create a new account</a>
                            <button type="button" className="btn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//}}}

export default class Navigation extends React.Component {
    constructor(props){
        super(props);

        this.signUp = this.signUp.bind(this);
    }

    signUp (e) {
        e.preventDefault(); 
        var modal = document.getElementById("modal-signup");
        modal.classList.add("is-open");
    }
    
    signIn (e) {
        e.preventDefault(); 
        var modal = document.getElementById("modal-signin");
        modal.classList.add("is-open");
    }

    render() {
        return (
            <div className='nav-container'>
                <div className='nav-right'>
                    <NavLink exact activeClassName='active' to='/'>
                        <img src={logo} className="App-logo" alt="Home" />
                    </NavLink>
                </div>
                <div className='nav-center'>
                </div>
                <div className='nav-left'>
                    <ul className="inav">
                        <li>
                            <NavLink activeClassName='active' to='/carryme'>
                                Carry Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/icarry'>
                                I Carry
                            </NavLink>
                        </li>
                        <li>
                            <DropDown />
                        </li>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={this.signUp}>Sign Up</a>
                            <SignUp />
                        </li>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={this.signIn}>Sign In</a>
                            <SignIn />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
