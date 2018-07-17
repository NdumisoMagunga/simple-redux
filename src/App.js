import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import TopNav from './components/NavBar';
import Home from './screens/home';
import Chat from './screens/chat';
import About from './screens/about'; 


import * as actions from './actions';
import {connect} from 'react-redux';

class App extends Component {
  
componentDidMount() {
  this.props.fetchUsers();
  this.props.fetchPhotos();
  this.props.fetchPosts();
}

  render() {
    return (
     <BrowserRouter>
      <div className="App">
        <TopNav />
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/chat' exact component={Chat} />
      </div>
     </BrowserRouter>
    );
  }
}

function mapStateToProps({users,photos,posts}){
  return {
    users,
    photos,
    posts,
  }
}

export default connect(mapStateToProps, actions) (App);
