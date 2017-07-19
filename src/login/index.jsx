import React, { Component } from 'react';
import styled from 'styled-components';
import Immutable from 'seamless-immutable';
import { connect } from 'react-redux';
import { tryLogin } from './actions';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;

const EmailInput = styled.input.attrs({
  type: 'email',
  placeholder: 'Email Address'
})`
  display: block;
  font-size: 20px;
  border: none;
`;

const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: 'Password'
})`
  display: block;
  font-size: 20px;
  border: none;
`;

const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  font-size: 20px;
  width: 100%;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: Immutable(''),
      password: Immutable('')
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.tryLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <LoginContainer>
        <LoginForm onSubmit={this.handleSubmit.bind(this)}>
          <EmailInput value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
          <PasswordInput value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
          <SubmitButton>Sign in</SubmitButton>
        </LoginForm>
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  tryLogin: (email, password) => dispatch(tryLogin(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
