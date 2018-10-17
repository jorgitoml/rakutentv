import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/Loading/loading.js';
import Layout from '../hoc/layout';
import MovieSection from '../components/MovieSection/movieSection';

import * as actions from '../store/actions/index';

import '../assets/css/slick.css';
import '../assets/css/slick-theme.css';

class HomeScreen extends Component {

    componentDidMount(){
        if(!this.props.sections.length){
            this.props.onInitSections();
        }   
    }

    hanleMovieClick = (id) => {
        this.props.history.push({
            pathname: '/detail',
            search: `id=${id}`
        });
    }

    render() {

        return (
            <AuxHoc>
                {
                    (this.props.status.loading || !this.props.sections.length) ? 
                    <Loading  error={this.props.status.error} />
                    :
                    <Layout>
                        {
                            this.props.sections.map(item=><MovieSection key={item.id} section={item} showDetail={this.hanleMovieClick} />)
                        }
                    </Layout>
                }
            </AuxHoc>
        );
    }
}

const mapStateToProps = state => {
    return {
        status: state.status,
        sections: state.content.sections
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitSections: ()=>dispatch(actions.fetchSections())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);