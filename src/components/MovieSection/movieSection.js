import React from 'react';
import Slider from 'react-slick';
import {sliderArrowLeft as SliderPrev, sliderArrowRight as SliderNext} from '../../components/MovieSection/SliderArrows/sliderArrows';


const MovieSection = (props) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        draggable: true,
        slidesToShow: 7,
        variableWidth: false,
        nextArrow: <SliderNext />,
        prevArrow: <SliderPrev />,
      };

    return (
        <section className="movie__section">
            <h1 className="movie__section__title">{props.section.name}</h1>
            <Slider {...settings}>
                {
                    props.section.contents.data.map(item=><img key={item.id} alt={item.title} src={item.images.artwork} />)
                }
            </Slider>
        </section>
    );
};

export default MovieSection;