import React, { Component } from 'react';
import Swipeable from 'react-swipeable';
import throttle from 'lodash/throttle';
import {withRouter} from 'react-router-dom';

import { updateObject } from '../../../shared/utils';
import arrow from '../../../assets/img/slider-arrow.png';
import MovieSlot from './movieSlot';

class moviesSlider extends Component {

    state = {
        position: 0,
        direction: 'next',
        sliding: false
    }

    getOrder = itemIndex=>{
        const { position } = this.state;
        const numItems = this.props.movies.length || 1;
        return (itemIndex - position < 0) ? numItems - Math.abs(itemIndex - position) : itemIndex - position; 
    }

    nextSlide = ()=>{
        const { position } = this.state;
        const numItems = this.props.movies.length || 1;
        this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
    }

    prevSlide = ()=>{
        const { position } = this.state;
        const numItems = this.props.movies.length
        this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
    }

    doSliding = (direction, position) => {
        this.setState(updateObject(this.state,{
          sliding: true,
          direction: direction,
          position: position
        }));

        setTimeout(() => {
          this.setState(updateObject(this.state,{
            sliding: false
          }))
        }, 300);
    }

    hanleMovieClick = (id) => {
        this.props.history.push({
            pathname: '/detail',
            search: `id=${id}`
        });
    }

    handleSwipe = throttle((isNext) => {
        isNext? this.nextSlide() : this.prevSlide()
    }, 500, { trailing: false });

    render() {

        const track_style = ['movies-slider__container__viewer__track'];
        this.state.sliding ? 
            (this.state.direction==='next') ? track_style.push('sliding_track','sliding_track-next') : track_style.push('sliding_track','sliding_track-prev') 
            : track_style.push('not-sliding_track');

        return (
            <div className="movies-slider">
                
                <div className="movies-slider__container">
                    <div className="movies-slider__container__previous-button" onClick={()=>this.prevSlide()}>
                        <img alt="next" src={arrow} />
                    </div>


                    <div className="movies-slider__container__viewer">
                        <Swipeable
                            onSwipingLeft={ () => this.handleSwipe(true) }
                            onSwipingRight={ () => this.handleSwipe(false) }
                        >

                            <div 
                                className={track_style.join(' ')}
                            >
                                {
                                    this.props.movies.map((item,index)=>{
                                        return (
                                            <MovieSlot key={item.id} movie={item} order={this.getOrder(index)} hanleClick={this.hanleMovieClick}/>
                                        )
                                    })
                                }
                            </div>
                        </Swipeable>
                    </div>

                    
                    <div className="movies-slider__container__next-button" onClick={()=>this.nextSlide()}>
                        <img alt="next" src={arrow} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(moviesSlider);