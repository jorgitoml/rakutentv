import React from 'react';
import arrow from '../../../assets/img/slider-arrow.png';

export const sliderArrowRight = (props) => {
    return (
        <div className="slider-arrows slick-next" onClick={props.onClick}>
            <img alt="next" src={arrow} />
        </div>
    );
};

export const sliderArrowLeft = (props) => {
    return (
        <div className="slider-arrows slick-prev" onClick={props.onClick}>
            <img alt="prev" src={arrow} />
        </div>
    );
};