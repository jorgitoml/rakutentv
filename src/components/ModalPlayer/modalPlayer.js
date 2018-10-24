import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../Loading/loading';
import Toast from '../Toast/toast';

import * as actions from '../../store/actions/index';

class modalPlayer extends Component {

    handleHidePlayer = ()=>{
        this.props.onHidePlayer();
    }

    handlePlayerError = (error)=>{
        this.props.onErrorPlayer(error);
    }

    render() {
        return (
            !this.props.show ? 
                null 
            :
                <div className="modal-player">
                    <div className="modal-player__container">
                        <i className="fas fa-times-circle"  onClick={()=>this.handleHidePlayer()}></i>
                        {
                            this.props.playerStatus.error ? 
                                <Toast className="modal-player__container__error">
                                    <Loading error={this.props.playerStatus.error} message={this.props.playerStatus.errorMessage}/> 
                                </Toast>
                            :
                                <video controls autoPlay poster={this.props.playerPoster} onError={this.handlePlayerError}>
                                    {
                                        this.props.playerStatus.sources ?
                                            this.props.playerStatus.sources.map((item,index)=><source key={index} src={item.url} type="video/mp4" />)
                                        :
                                            null
                                    }
                                </video>
                        }
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        playerStatus: state.status.player
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onHidePlayer: ()=>dispatch(actions.hidePlayer()),
        onErrorPlayer: ()=>dispatch(actions.errorPlayer())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(modalPlayer);