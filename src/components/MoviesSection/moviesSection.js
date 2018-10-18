import React from 'react';

import MoviesSlider from './moviesSlider/moviesSlider';

const MovieSection = (props) => {
    return (
        <section className="movie__section">
            <h1 className="movie__section__title">{props.section.name}</h1>
            <MoviesSlider movies={props.section.contents.data} />
        </section>
    );
};

export default MovieSection;