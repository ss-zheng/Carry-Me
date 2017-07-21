import logo from './logo.svg';
import Package1 from './package1.svg';
import Package2 from './package2.svg';
import Package3 from './package3.svg';
import Cross from './cross.svg';
import React from 'react';
import NavLink from 'react-router-dom/NavLink'; 

// <img src={logo} className="App-logo" alt="Home" />

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
            <div className='dropdown'>
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

        this.hideAway = this.hideAway.bind(this);
    }

    hideAway () {
        var modal = document.getElementById("modal");
        modal.classList.remove("is-open");
    }
    render() {
        return (
            <div style={{curser:"pointer", display:"inline-block"}}>
                <div className="modal" id="modal"> 
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
                                    <input name="user-name" type="text" placeholder="User Name" />
                                </div>
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
                            <button type="button" className="btn">Register</button>
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

        this.showUp = this.showUp.bind(this);
    }

    showUp (e) {
        e.preventDefault(); 
        var modal = document.getElementById("modal");
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
                            <a onClick={this.showUp}>Sign Up</a>
                            <SignUp />
                        </li>
                        <li>
                            <a>Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
