import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { tryRegister, loginReset } from 'user/actions';
import {
  RegisterContainer,
  RegisterForm,
  EmailInput,
  PasswordInput,
  SubmitButton,
  ErrorMessage,
  LoginButton,
  ButtonContainer,
  ConfirmPasswordInput
} from './components';

const initState = {
  email: '',
  password: '',
  confirmPassword: ''
};

class Register extends Component {
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
    this.props.tryRegister(this.state.email, this.state.password, this.state.confirmPassword);
  }

  render() {
    return localStorage.getItem('JWT') ? <Redirect to="/" /> : (
      <RegisterContainer>
        <RegisterForm onSubmit={this.handleSubmit.bind(this)}>
          <h1>Register</h1>
          <EmailInput value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
          <PasswordInput value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
          <ConfirmPasswordInput value={this.state.confirmPassword} onChange={e => this.setState({ confirmPassword: e.target.value })} />
          <ButtonContainer>
            <SubmitButton>Register</SubmitButton>
            <LoginButton to="/login">Sign in</LoginButton>
          </ButtonContainer>
          {this.props.user.error && <ErrorMessage>{this.props.user.error.message}</ErrorMessage>}
        </RegisterForm>
      </RegisterContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  tryRegister: (email, password, confirmPassword) => dispatch(tryRegister(email, password, confirmPassword)),
  loginReset: () => dispatch(loginReset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
