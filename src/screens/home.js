import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Home extends Component{
componentDidMount(){
    this.props.fetchPosts();
}

    render() {
        console.log(this.props.posts);
        const {posts} = this.props;
        return (
            <div>
                <p>
                    {
                        posts.map((data, index) =>{
                            return(
                                <div>{data.title}</div>
                            )
                        })
                    }
                </p>
            </div>
        )
    }
}

function mapStateToProps({posts}) {
 return {
     posts
    }
}

export default connect(mapStateToProps,actions)(Home);