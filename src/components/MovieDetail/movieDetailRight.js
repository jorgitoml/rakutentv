import React from 'react';

import Toast from '../Toast/toast';
import PersonCard from './PersonCard/personCard';

const movieDetailRight = (props) => {
    return (
        <Toast className="movie-detail-right">
            <article  className="movie-detail-right__info">
                <h1>Dirección</h1>
                {
                    props.movie.directors.map(item=><PersonCard key={item.numerical_id} picture={item.photo} text={item.name}/>)
                }
            </article>

            <article  className="movie-detail-right__info">
                <h1>Reparto</h1>
                {
                    props.movie.actors.map(item=><PersonCard key={item.numerical_id} picture={item.photo} text={item.name}/>)
                }
            </article>
        </Toast>
    );
};

export default movieDetailRight;