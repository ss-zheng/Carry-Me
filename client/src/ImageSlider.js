import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PropTypes from 'prop-types';


function CusSlide(props) {
    var css= {
        content: {
            backgroundImage: "url(" + props.slide.img + ")"
        }
    };
    return(
            <div className="frame" style={css.content}>
                <h2 className="slide-text">
                    {props.slide.text}
                </h2>
            </div>
          );
}

CusSlide.propTypes = {
    slide: PropTypes.object.isRequired
}

export default function ImageSlider(props) {
    var slides=props.slides;
    var settings = {
      dots: true,
      fade: true,
      autoplay: true,
      arrows: false,
      infinite: true,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {slides.map((slide) => {
                                 return (
                                        <div key={slide.text}><CusSlide slide={slide}/></div>
                                        )
                             })}
      </Slider>
    );
}

ImageSlider.propTypes = {
    slides: PropTypes.array.isRequired
}


