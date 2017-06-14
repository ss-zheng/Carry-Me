import React, { Component } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import ImagesSlider from './ImageSlider';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

import img1 from './images/coding.jpg';
import img2 from './images/city.jpg';
import img3 from './images/city3.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        first_name: '',
        last_name: '',
        user_email: '',
        }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleReset = this.handleUpdate.bind(this);
  }
  
  handleUpdate(user) {
      this.setState(function () {
          return {
              first_name: user.first_name,
              last_name: user.last_name,
              user_email: user.user_email
          };
      })
  }

  handleReset() {
      this.setState(function () {
          return {
              first_name: '',
              last_name: '',
              user_email: ''
          };
      })
  }
      
  render() {
    var slides=[{img: img1, text: "City1"}, 
                {img: img2, text: "City2"}, 
                {img: img3, text: "City3"}];
    
    var settings = {
        onReset: this.handleReset,
        onUpdate: this.handleUpdate
    }

    return (
      <div className="App">
        <ImagesSlider slides={slides}/>
        <Grid>
            <Row>
                <Navigation {...settings}/>
            </Row>
            <div style={{height:50}}> </div>
            <Row>
                <SearchBar />
            </Row>
            <div style={{height:1000}}> </div>
        </Grid>
      </div>
    );
  }
}

export default App;
