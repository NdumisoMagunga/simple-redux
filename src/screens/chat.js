import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
     CardLink, CardTitle, CardSubtitle } from 'reactstrap';

import { Link } from 'react-router-dom';

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
                        
                        if (data.albumId <= 1) {
                        return(
                            
                            <div key={index}  style={{height:500, width:500, alignContent:'center'}}>
                           <Link to="/about"><Card >
                                <CardBody>
                                    <CardTitle style={{color:'black'}}>{data.title} {data.id}</CardTitle>
                                </CardBody>
                                    <img src={data.url} style={{height:300, width:500}} />
                                <CardBody>
                                <Link to="/"><CardLink >Redux</CardLink></Link>
                                </CardBody>
                           </Card></Link>
                           </div>
                        )
                    }
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