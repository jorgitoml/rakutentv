import React from 'react';

const movieSlot = (props) => {

    return (
        <div className="movie-slot" style={{order:props.order}}>
            <div className="movie-slot__container">
                <img src={props.movie.images.artwork} />

                {
                    props.movie.images.ribbons.map(item=>{
                        const ribbonClass = ["movie-slot__container__ribbons"];
                        ribbonClass.push(item.position);
                        return <img key={item.id} src={item.image} className={ribbonClass.join(' ')}/>
                    })
                }

                <div className="movie-slot__container__info">
                    <div className="movie-slot__container__info-title">{props.movie.title}</div>
                    <div className="movie-slot__container__info-data">
                        <div className="fas fa-star"> {props.movie.highlighted_score.score}</div>
                        <div className="fas fa-users"> {props.movie.highlighted_score.formatted_amount_of_votes}</div>
                    </div>
                    <div className="movie-slot__container__info-action">
                        <i className="fas fa-info-circle" onClick={()=>props.hanleClick(props.movie.id)}></i>
                    </div>
                </div>
                    
                
            </div>
            
        </div>
    );
};

export default movieSlot;