import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/Loading/loading.js';
import Layout from '../hoc/layout';
import MoviesSection from '../components/MoviesSection/moviesSection';

import * as actions from '../store/actions/index';

class HomeScreen extends Component {

    componentDidMount(){
        if(!this.props.sections.length){
            this.props.onInitSections();
        }   
    }

    render() {

        return (
            <AuxHoc>
                {
                    (this.props.status.loading || !this.props.sections.length) ? 
                    <Loading  error={this.props.status.error}  message={this.props.status.errorMessage} />
                    :
                    <Layout>
                        <div className="home__container">
                            {
                                this.props.sections.map(item=><MoviesSection key={item.id} section={item} />)
                            }
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
        sections: state.content.sections
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitSections: ()=>dispatch(actions.fetchSections())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);