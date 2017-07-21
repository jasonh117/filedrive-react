import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
  placeholder: 'Email Address'
})`
  display: block;
  font-size: 20px;
  border: none;
  margin-bottom: 20px;
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: 'Password'
})`
  display: block;
  font-size: 20px;
  border: none;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  font-size: 20px;
  width: 80px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  margin: 0;
  color: red;
`;