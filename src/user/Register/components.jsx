import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { commonButton } from 'lib/components';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
  placeholder: 'Email Address',
  required: true
})`
  display: block;
  font-size: 20px;
  border: none;
  margin-bottom: 20px;
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: 'Password',
  required: true
})`
  display: block;
  font-size: 20px;
  border: none;
  margin-bottom: 20px;
`;

export const ConfirmPasswordInput = PasswordInput.extend.attrs({
  placeholder: 'Confirm Password'
})``;

export const SubmitButton = commonButton.withComponent('button').extend.attrs({
  type: 'submit'
})`
  font-size: 20px;
  padding: 10px;
  background-color: white;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  margin: 0;
  color: red;
`;

export const LoginButton = commonButton.withComponent(Link).extend`
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 15vw;
`;
