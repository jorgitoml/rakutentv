import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/Loading/loading.js';
import Layout from '../hoc/layout';

import * as actions from '../store/actions/index';

class SplashScreen extends Component {

    componentDidMount(){
        this.props.onInitMovie(this.props.match.params.id);
    }

    render() {
        return (
            <AuxHoc>
                {
                    this.props.status.loading ? 
                    <Loading  error={this.props.status.error} message={this.props.status.errorMessage}/>
                    :
                    <Layout title={this.props.movie.title}>
                        <p>Detail!!!!</p>
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
        onInitMovie: (id)=>dispatch(actions.fetchMovie(id))
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SplashScreen));