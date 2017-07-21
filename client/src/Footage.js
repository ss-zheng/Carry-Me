import React from 'react';
import logo from './logo.svg';
import FB from './facebook.svg';
import Twitter from './twitter.svg';
import WeChat from './wechat.svg';

export default function Footage() {
    return (
        <div className='foot-container'>
            <div className='foot-colum'>
                <img src={logo} className="App-logo" alt="Home" />
            </div>
            <div className='foot-colum'>
                &#169; Carryme, Inc.
            </div>
            <div className='foot-colum'>
                <ul>
                    <li>
                        <img src={FB} alt='FB'/>
                    </li>
                    <li>
                        <img src={Twitter} alt='Twitter'/>
                    </li>
                    <li>
                        <img src={WeChat} alt='WeChat'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
