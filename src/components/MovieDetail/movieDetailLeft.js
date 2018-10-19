import React from 'react';

const movieDetailLeft = (props) => {
    return (
        <div className="movie-detail-left">
            {props.children}
        </div>
    );
};

export default movieDetailLeft;