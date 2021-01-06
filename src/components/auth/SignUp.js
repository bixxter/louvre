import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    userName: '',
    img: 'https://i2.wp.com/www.vooks.net/img/2016/06/HddtBOT.png?fit=1920%2C1080&ssl=1',
    error: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const userName = this.state.userName.length;
    if (userName !== 0) {
      this.setState({
        error: '',
      });
      this.props.signUp(this.state);
    } else {
      this.setState({
        error: 'Your username should be bigger than your pepe size!(0)',
      });
    }
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>New Inhabitant</h5>
          <div className="input-field">
            <label htmlFor="userName">User name</label>
            <input type="text" id="userName" onChange={this.handleChange} />
            <span className="red-text">{this.state.error && this.state.error}</span>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="img">Link to image for profile picture</label>
            <input type="text" id="img" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn louvColor z-depth-0">Sign Up</button>
            <div className="red-text center z-depth-1 p1">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
