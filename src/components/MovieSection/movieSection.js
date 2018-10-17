import React from 'react';
import Slider from 'react-slick';

import {sliderArrowLeft as SliderPrev, sliderArrowRight as SliderNext} from '../../components/MovieSection/SliderArrows/sliderArrows';
import MovieItem from './MovieItem/movieItem';


const MovieSection = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToScroll: 1,
        draggable: true,
        slidesToShow: 7,
        variableWidth: false,
        adaptiveHeight: true,
        nextArrow: <SliderNext />,
        prevArrow: <SliderPrev />
      };

    return (
        <section className="movie__section">
            <h1 className="movie__section__title">{props.section.name}</h1>
            <Slider {...settings}>
                {
                    props.section.contents.data.map(item=><MovieItem key={item.id} movie={item} showDetail={props.showDetail}/>)
                }
            </Slider>
        </section>
    );
};

export default MovieSection;