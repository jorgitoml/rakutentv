import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/Loading/loading.js';
import Layout from '../hoc/layout';

class SplashScreen extends Component {
    render() {
        return (
            <AuxHoc>
                {
                    this.props.status.loading ? 
                    <Loading  error={this.props.status.error} />
                    :
                    <Layout title="TITULO">
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
        selected: state.content.selected
    };
}

export default connect(mapStateToProps)(SplashScreen);