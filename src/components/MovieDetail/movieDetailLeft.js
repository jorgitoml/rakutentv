import React from 'react';

import Toast from '../Toast/toast';

const movieDetailLeft = (props) => {
    return (
        <Toast className="movie-detail-left">
            <img alt="poster" src={props.movie.images.artwork}/>

            <ul className="movie-detail-left__info">
                <li>{props.movie.original_title}</li>
                <li>{props.movie.duration} minutos</li>
                <li>{props.movie.classification.age}</li>
                <li>{props.movie.year}</li>
                {
                    props.movie.countries.map(item=><li key={item.id}>{item.name}</li>)
                }
                <li></li>
            </ul>

        </Toast>
    );
};

export default movieDetailLeft;