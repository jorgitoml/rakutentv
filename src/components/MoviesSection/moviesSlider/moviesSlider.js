import React, { Component } from 'react';

import arrow from '../../../assets/img/slider-arrow.png';

class moviesSlider extends Component {

    state = {
        position: 0
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
        this.setState({
          position: position === numItems - 1 ? 0 : position + 1
        })
    }

    prevSlide = () => {
        const { position } = this.state;
        const numItems = this.props.movies.length
        this.setState({
            position: position === 0 ? numItems - 1 : position - 1
        })
    }

    render() {
        return (
            <div className="movies-slider">
                
                <div className="movies-slider__container">
                    <div className="movies-slider__container__previous-button" onClick={()=>this.prevSlide()}>
                        <img alt="next" src={arrow} />
                    </div>
                    <div className="movies-slider__container__track">
                        {
                            this.props.movies.map((item,index)=>{
                                return (
                                    <div 
                                        key={item.id} 
                                        className="movies-slider__slot"
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