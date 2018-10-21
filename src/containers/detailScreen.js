import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/Loading/loading.js';
import Layout from '../hoc/layout';
import MovieDetailLeft from '../components/MovieDetail/movieDetailLeft';
import MovieDetailCenter from '../components/MovieDetail/movieDetailCenter';
import MovieDetailRight from '../components/MovieDetail/movieDetailRight';
import ModalPlayer from '../components/ModalPlayer/modalPlayer';

import * as actions from '../store/actions/index';

class detailScreen extends Component {

    componentDidMount(){
        this.props.onInitMovie(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.onLeave();
    }

    handleShowPlayer = (id)=>this.props.onShowPlayer(id);

    render() {
        console.log(this.props.movie);

        return (
            <AuxHoc>
                {
                    (this.props.status.loading || !this.props.movie) ? 
                    <Loading  error={this.props.status.error} message={this.props.status.errorMessage}/>
                    :
                    <Layout title={this.props.movie.title}>
                        <ModalPlayer show={this.props.status.playerShown} playerPoster={this.props.movie.images.snapshot}/>
                        
                        <div className="detail-container">

                            <MovieDetailLeft movie={this.props.movie} />


                            <MovieDetailCenter movie={this.props.movie} openPlayer={this.handleShowPlayer}/>


                            <MovieDetailRight movie={this.props.movie} />
                            
                        </div>
                    
                    </Layout>
                }
            </AuxHoc>
        );
    }
}

const mapStateToProps = state => {
    return {
        status: state.status,
        movie: state.selected.movie
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitMovie: (id)=>dispatch(actions.fetchMovie(id)),
        onLeave: ()=>dispatch(actions.clearMovie()),
        onShowPlayer: (id)=>dispatch(actions.showPlayer(id)),
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(detailScreen));