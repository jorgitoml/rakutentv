import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/Loading/loading.js';
import Layout from '../hoc/layout';

class SplashScreen extends Component {
    render() {

        console.log(this.props);

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

export default withRouter(connect(mapStateToProps)(SplashScreen));