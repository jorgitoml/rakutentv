import React from 'react';

const movieItem = (props) => {
    return (
        <div className="movie-item">
            <img className="movie-item__image" alt={props.movie.title} src={props.movie.images.artwork} onClick={()=>props.showDetail(props.movie.id)}/>
        </div>
    );
};

export default movieItem;
