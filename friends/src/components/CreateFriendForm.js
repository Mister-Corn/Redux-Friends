import React from 'react';
// Redux
import { connect } from 'react-redux';
// Redux--Actions
import { postFriend } from '../actions';

class CreateFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
      likes: '',
    }
  }

  handleTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  goPostFriend = (e) => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      likes: this.state.likes,
    };
    this.props.postFriend(newFriend);
    this.setState({
      name: '',
      age: '',
      email: '',
      likes: '',
    })
  }

  render() {
    return (
      <main className="pa4 black-80">
        <form onSubmit={(e) => this.goPostFriend(e)} className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Who's your new friend?</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                type="text" 
                name="name"  
                id="name"
                value={this.state.name}
                onChange={(e) => this.handleTextChange(e)} 
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="email">E-mail</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                type="text" 
                name="email"  
                id="email"
                value={this.state.email}
                onChange={(e) => this.handleTextChange(e)} 
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                type="text" 
                name="age"  
                id="age"
                value={this.state.age}
                onChange={(e) => this.handleTextChange(e)}  
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="likes">What does your friend like?</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                type="text" 
                name="likes"  
                id="likes"
                value={this.state.age}
                onChange={(e) => this.handleTextChange(e)}  
              />
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Add to the List" />
          </div>
          {/* <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Go back</a>
          </div> */}
        </form>
      </main>
    );
  }
}

export default connect(null, { postFriend })(CreateFriendForm);