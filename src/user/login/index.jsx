import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { tryLogin } from 'user/actions';
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
  password: '',
  error: null
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentWillMount() {
    this.setState(initState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.tryLogin(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ error });
      });
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
          {this.state.error && <ErrorMessage>{this.state.error.message}</ErrorMessage>}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
