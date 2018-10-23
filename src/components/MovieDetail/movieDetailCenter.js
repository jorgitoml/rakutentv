import React from 'react';

import HeroDetail from './HeroDetail/heroDetail';
import Toast from '../Toast/toast';
import ReviewCard from './ReviewCard/reviewCard';

const movieDetailCenter = (props) => {
    return (
        <div className="movie-detail-center">
            <HeroDetail movie={props.movie} openPlayer={props.openPlayer}/>

            <Toast className="movie-detail-center__sinopsis">
                <h1>Sinopsis</h1>
                <p>
                    {props.movie.plot}
                </p>
            </Toast>

            <Toast className="movie-detail-center__scores">
                <h1>Reseñas</h1>
                <div className="movie-detail-center__scores__container">
                    {
                        props.movie.scores.map(item=><ReviewCard key={item.numerical_id} score={item}/>)
                    }
                </div>
            </Toast>
        </div>
    );
};

export default movieDetailCenter;