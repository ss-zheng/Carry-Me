import React, { Component } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import ImagesSlider from './ImageSlider';
import Row from 'react-bootstrap/lib/Grid';
import Grid from 'react-bootstrap/lib/Grid';

import img1 from './images/coding.jpg';
import img2 from './images/city.jpg';
import img3 from './images/city3.jpg';

class App extends Component {
  render() {
    var slides=[{img: img1, text: "City1"}, 
                {img: img2, text: "City2"}, 
                {img: img3, text: "City3"}];
    return (
      <div className="App">
        <ImagesSlider slides={slides}/>
        <Grid>
            <Row>
                <Navigation />
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
