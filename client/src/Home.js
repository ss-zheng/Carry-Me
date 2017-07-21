import React from 'react';
import Link from 'react-router-dom/Link';
// var React = require('react');
// var Link = require('react-router-dom').Link;

export default class Home extends React.Component {
    render(){
        return (
            <div className='home-container'>
                Home Page
                <Link className='button' to='/'>
                    Home
                </Link>
            </div>
            )
    }
}

