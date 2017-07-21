import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter'; 
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Navigation from './Nav';
import Home from './Home';
import CarryMe from './CarryMe';
import ICarry from './ICarry';
import Footage from './Footage';
// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Navigation />
                        <div className="icontainer">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/carryme" component={CarryMe} />
                                <Route exact path="/icarry" component={ICarry} />
                                <Route render={function () {
                                    return <p>Not Found</p>
                                }} />
                            </Switch>
                            <div style={{height:'1000px'}}>
                            </div>
                            <Footage />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
