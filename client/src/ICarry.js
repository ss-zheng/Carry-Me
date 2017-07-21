import React from 'react';
import Link from 'react-router-dom/Link';
// var React = require('react');
// var Link = require('react-router-dom').Link;

export default class ICarry extends React.Component {
    render(){
        return (
            <div className='home-container'>
                <h1>ICarry Page</h1>
                <Link className='button' to='/'>
                    Home
                </Link>
            </div>
            )
    }
}

