import React from 'react';
import {Link} from 'react-router-dom';

const reviewCard = (props) => {
    return (
        <a className="score-card" href={props.score.href} target="_blank">
            <figure  className="score-card__logo">
                <img alt={props.score.site.name} src={props.score.site.image} />
            </figure>
        </a>
    );
};

export default reviewCard;