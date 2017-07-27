import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateSettings } from 'user/actions';
import {
  SettingsContainer,
  SettingsForm,
  EmailInput,
  PasswordInput,
  SaveButton,
  ErrorMessage,
  BackButton,
  ButtonContainer,
  ConfirmPasswordInput,
  UpdatedMessage,
} from './components';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.user.email || '',
      password: '',
      confirmPassword: '',
      updated: false,
      error: null
    };;
  }

  componentWillReceiveProps(props) {
    if (props.user.email) {
      this.setState({ email: props.user.email });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: {
          message: 'Passwords do not match.'
        }
      });
      return;
    }

    const updates = {};
    if (this.state.email.trim().length > 0) {
      updates.email = this.state.email;
    }
    if (this.state.password.trim().length > 0) {
      updates.password = this.state.password;
    }
    if (this.state.confirmPassword.trim().length > 0) {
      updates.confirmPassword = this.state.confirmPassword;
    }
    this.props.updateSettings(updates)
      .then(() => {
        this.setState({ updated: true, error: null });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return !localStorage.getItem('JWT') ? <Redirect to="/login" /> : (
      <SettingsContainer>
        <SettingsForm onSubmit={this.handleSubmit.bind(this)}>
          <h1>Settings</h1>
          <EmailInput value={this.state.email} onChange={e => this.setState({ email: e.target.value, updated: false })} />
          <PasswordInput value={this.state.password} onChange={e => this.setState({ password: e.target.value, updated: false })} />
          <ConfirmPasswordInput value={this.state.confirmPassword} onChange={e => this.setState({ confirmPassword: e.target.value, updated: false })} />
          <ButtonContainer>
            <SaveButton>Save</SaveButton>
            <BackButton to="/">Back</BackButton>
          </ButtonContainer>
          {this.state.error && <ErrorMessage>{this.state.error.message}</ErrorMessage>}
          {this.state.updated && <UpdatedMessage>updated</UpdatedMessage>}
        </SettingsForm>
      </SettingsContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  updateSettings: (user) => dispatch(updateSettings(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
