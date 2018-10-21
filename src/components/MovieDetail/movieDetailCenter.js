import React from 'react';

import HeroDetail from './HeroDetail/heroDetail';

const movieDetailCenter = (props) => {
    return (
        <div className="movie-detail-center">
            <HeroDetail movie={props.movie} openPlayer={props.openPlayer}/>




        </div>
    );
};

export default movieDetailCenter;