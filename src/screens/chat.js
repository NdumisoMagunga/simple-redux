import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Chat extends Component{
componentDidMount() {
    this.props.fetchPhotos();
}

    render() {
        const {photos} = this.props;
        console.log(photos)

        return (
            <div>
                {
                    photos.map((data,index) => {
                        return(
                            <li key={index}>
                                <img source={data.photo} style={{height:300,width:300}} /> 
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps({photos}) {
    return {
        photos
    }
}

export default connect(mapStateToProps, actions) (Chat);