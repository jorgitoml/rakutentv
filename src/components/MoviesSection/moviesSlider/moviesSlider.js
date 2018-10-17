import React, { Component } from 'react';

import arrow from '../../../assets/img/slider-arrow.png';

class moviesSlider extends Component {

    state = {
        position: 0,
        direction: 'next',
        sliding: false
    }

    getOrder = itemIndex=>{
        const { position } = this.state;
        const numItems = this.props.movies.length || 1;

        if (itemIndex - position < 0) {
          return numItems - Math.abs(itemIndex - position);
        }
        return itemIndex - position;
    }

    nextSlide = ()=>{
        const { position } = this.state;
        const numItems = this.props.movies.length || 1;
        this.doSliding('next',position === numItems - 1 ? 0 : position + 1);
    }

    prevSlide = ()=>{
        const { position } = this.state;
        const numItems = this.props.movies.length
        this.doSliding('prev',position === 0 ? numItems - 1 : position - 1);
    }

    doSliding = (direction, position) => {
        this.setState({
          sliding: true,
          direction: direction,
          position: position
        });

        setTimeout(() => {
          this.setState({
            sliding: false
          })
        }, 300)
    }

    render() {

        const track_style = ['movies-slider__slot'];
        this.state.sliding ? 
            (this.state.direction==='next') ? track_style.push('sliding_track','sliding_track-next') : track_style.push('sliding_track','sliding_track-prev') 
            : track_style.push('not-sliding_track');
            
        

        return (
            <div className="movies-slider">
                
                <div className="movies-slider__container">
                    <div className="movies-slider__container__previous-button" onClick={()=>this.prevSlide()}>
                        <img alt="next" src={arrow} />
                    </div>
                    <div 
                        className='movies-slider__container__track'
                    >
                        {
                            this.props.movies.map((item,index)=>{
                                return (
                                    <div 
                                        key={item.id} 
                                        className={track_style.join(' ')}
                                        style={{order:this.getOrder(index)}}
                                        >
                                            <img src={item.images.artwork} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="movies-slider__container__next-button" onClick={()=>this.nextSlide()}>
                        <img alt="next" src={arrow} />
                    </div>
                </div>
            </div>
        );
    }
}

export default moviesSlider;