import React from 'react';

import Toast from '../Toast/toast';

const movieDetailRight = (props) => {
    return (
        <Toast className="movie-detail-right">
            {props.children}
        </Toast>
    );
};

export default movieDetailRight;