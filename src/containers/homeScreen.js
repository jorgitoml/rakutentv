import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/loading.js';
import Layout from '../hoc/layout';

import * as actions from '../store/actions/index';

class HomeScreen extends Component {

    componentDidMount(){
        this.props.onInitContents();
    }

    render() {

        return (
            <AuxHoc>
                {
                    this.props.status.loading ? 
                    <Loading  error={this.props.status.error} />
                    :
                    <Layout>
                        Home!!!!!
                    </Layout>
                }
            </AuxHoc>
        );
    }
}

const mapStateToProps = state => {
    return {
        status: state.status,
        data: state.content.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitContents: ()=>dispatch(actions.fetchContents())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);