import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { tryLogin } from '../actions';
import {
  LoginContainer,
  LoginForm,
  EmailInput,
  PasswordInput,
  SubmitButton,
  ErrorMessage
} from './components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.tryLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <LoginContainer>
        { localStorage.getItem('JWT') && <Redirect to="/"/> }
        <LoginForm onSubmit={this.handleSubmit.bind(this)}>
          <EmailInput value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
          <PasswordInput value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
          <SubmitButton>Sign in</SubmitButton>
          { this.props.user.error && <ErrorMessage>{this.props.user.error.message}</ErrorMessage> }
        </LoginForm>
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  tryLogin: (email, password) => dispatch(tryLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
