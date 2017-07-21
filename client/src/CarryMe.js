import React from 'react';
import Link from 'react-router-dom/Link';
// var React = require('react');
// var Link = require('react-router-dom').Link;

export default class CarryMe extends React.Component {
    render(){
        return (
            <div className='carryme-container'>
                <h1>CarryMe Page</h1>
                <Link className='button' to='/'>
                    Home
                </Link>
            </div>
            )
    }
}

