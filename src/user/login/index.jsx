import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { tryLogin, loginReset } from 'user/actions';
import {
  LoginContainer,
  LoginForm,
  EmailInput,
  PasswordInput,
  SubmitButton,
  ErrorMessage,
  RegisterButton,
  ButtonContainer
} from './components';

const initState = {
  email: '',
  password: ''
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentWillMount() {
    this.setState(initState);
    this.props.loginReset();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.tryLogin(this.state.email, this.state.password);
  }

  render() {
    return localStorage.getItem('JWT') ? <Redirect to="/" /> : (
      <LoginContainer>
        <LoginForm onSubmit={this.handleSubmit.bind(this)}>
          <h1>Login</h1>
          <EmailInput value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
          <PasswordInput value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
          <ButtonContainer>
            <SubmitButton>Sign in</SubmitButton>
            <RegisterButton to="/register">Register</RegisterButton>
          </ButtonContainer>
          {this.props.user.error && <ErrorMessage>{this.props.user.error.message}</ErrorMessage>}
        </LoginForm>
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  tryLogin: (email, password) => dispatch(tryLogin(email, password)),
  loginReset: () => dispatch(loginReset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
