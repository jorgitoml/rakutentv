import React from 'react';

const heroDetail = (props) => {
    return (
        <div className="hero-detail">
            <div className="hero-detail__background" style={{backgroundImage: `url(${props.movie.images.snapshot})`}} />
            <div className="hero-detail__content">
                <i className="fas fa-play-circle"></i>

                <div className="hero-detail__content__info">
                    <div className="hero-detail__content__info__title">
                        {props.movie.title}
                    </div>
                    <div className="hero-detail__content__info__score">
                        <div className="fas fa-star"> {props.movie.scores[0].score}</div>
                        <div className="fas fas fa-users"> {props.movie.scores[0].formatted_amount_of_votes}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default heroDetail;