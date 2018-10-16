import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuxHoc from '../hoc/auxHoc';
import Loading from '../components/loading.js';
import Layout from '../hoc/layout';

import * as actions from '../store/actions/index';

class HomeScreen extends Component {

    componentDidMount(){
        if(!this.props.sections.length){
            this.props.onInitSections();
        }   
    }

    render() {

        const featuredSection = this.props.sections.find(item => item.id === 'populares-en-taquilla');
        const notFeaturedSections = this.props.sections.filter(item => item.id !== 'populares-en-taquilla');

        return (
            <AuxHoc>
                {
                    (this.props.status.loading || !this.props.sections.length) ? 
                    <Loading  error={this.props.status.error} />
                    :
                    <Layout>

                        <div className="home__page">
                            <section className="home__page-section featured">
                                featured: {featuredSection.name}
                            </section>

                            {
                                notFeaturedSections.map(item => {
                                    return(
                                        <section key={item.id} className="home__page-section">
                                            not-featured: {item.name}
                                        </section>
                                    )
                                })
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