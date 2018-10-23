import React from 'react';

import Toast from '../Toast/toast';

const movieDetailLeft = (props) => {

    return (
        <Toast className="movie-detail-left">
            <img alt="poster" src={props.movie.images.artwork}/>

            <article className="movie-detail-left__info">
                <h1>Info</h1>
                <div className="movie-detail-left__info__text">
                    <i className="fas fa-info"></i>
                    {props.movie.original_title}
                </div>
                <div className="movie-detail-left__info__text">
                    <i className="far fa-clock"></i>
                    {props.movie.duration} minutos
                </div>
                <div className="movie-detail-left__info__text">
                    <i className="fas fa-child"></i>
                    {props.movie.classification.age}
                </div>
                <div className="movie-detail-left__info__text">
                    <i className="fas fa-calendar-alt"></i>
                    {props.movie.year}
                </div>
                {
                    props.movie.countries.map(item=><div className="movie-detail-left__info__text" key={item.id}><i className="fas fa-globe-americas"></i>{item.name}</div>)
                }
            </article>
            
            <article className="movie-detail-left__info">
                <h1>Géneros</h1>
                <div className="movie-detail-left__genre">
                    {
                        props.movie.genres.map(item=>{
                            return (
                                <div key={item.id} className="movie-detail-left__genre__item">
                                    <img alt="item.id" src={item.additional_images.icon}/>
                                    <div>{item.name}</div>
                                </div>)
                            }
                        )
                    }
                </div>
            </article>

        </Toast>
    );
};

export default movieDetailLeft;