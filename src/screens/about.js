import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class About extends Component{

    componentDidMount() {
        this.props.fetchUsers();
    };
    
    render() {
        console.log(this.props.users);
        return (
            <div>
               {
                   this.props.users.map((data, index) => {
                       return(
                           <li key={index}>{data.name} {data.email}</li>
                       )
                   })
               }
            </div>
        )
    }
}

function mapStateToProps({users}) {
return {
    users,
}
}

export default connect(mapStateToProps,actions) (About);