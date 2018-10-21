import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class modalPlayer extends Component {

    playerRef = React.createRef();

    handleHidePlayer = ()=>{
        console.log("PLAYER CLOSE");
        this.props.onHidePlayer();
    }

    handlePlayerError = ()=>{
        console.log("PLAYER ERROR");
    }

    playerClicked = (event) => {
        event.stopPropagation();
    }


    render() {
        return (
            !this.props.show ? 
                null 
            :
                <div className="modal-player" onClick={()=>this.handleHidePlayer()}>
                    <video controls poster={this.props.playerPoster} onError ={this.handlePlayerError} onClick={this.playerClicked} >
                        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    </video>
                </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHidePlayer: ()=>dispatch(actions.hidePlayer())
    };
}

export default connect(null,mapDispatchToProps)(modalPlayer);