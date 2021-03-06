import React, { Component } from 'react';
import './App.css';
// Redux
import { connect } from 'react-redux';
//  Redux--Actions
import { getFriends } from '../actions';
// Components
import Friends from './Friends';
import CreateFriendForm from './CreateFriendForm';
import UpdateFriendForm from './UpdateFriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>My Friends Notebook</h1>
        <Friends />
        <CreateFriendForm />
      </div>
    );
  }
}

export default connect(null, { getFriends })(App);
