import React from 'react';

const personCard = (props) => {
    return (
        <div className="person-card">
            <figure className="person-card__picture">
                {
                    props.picture ? 
                        <img alt={props.text} src={props.picture} />
                    :
                        <i className="fas fa-user"></i>
                }
            </figure>
            <p className="person-card__text">
                {props.text}
            </p>
        </div>
    );
};

export default personCard;