import React from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useStore } from '../store'
import { useNavigate } from "react-router-dom";
import login from "../services/LoginService";
import { validateInput } from '../utils/validateInput';
import logo from '../assets/logo.png';

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10% 0 0 35%;
  max-width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const FormGroup = styled.div`
  margin-bottom: 10px;
`

const Hint = styled.div`
  background-color: lightblue;
  padding: 5px;
  margin-bottom: 10px;
`

const Logo = styled.img`
  margin-left: auto;
`

const ErrorMessage = styled.div`
  color: #e51e1e;
`

const Input = styled.input`
  height: 50px;
`

const Login = () => {
  const [state, dispatch] = useStore()
  const { username, password, isLoading, error } = state;
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateInput(username) && validateInput(password)) {
      try {
        dispatch({ type: 'login' });
        const result = await login();

        if (username === result.username && password === result.password) {
          dispatch({ type: 'success' });
          localStorage.setItem('isLoggedIn', true)
          navigate(`/`);
        } else {
          dispatch({ type: 'error' });
        }
      } catch (error) {
        dispatch({ type: 'error' });
      }
    } else {
      dispatch({ type: 'required' });
    }
  };

  return (
    <LoginFormWrapper onSubmit={onSubmit} data-testid="login-form">
      <Logo src={logo} alt="logo" width="200" />
      <Hint>
        <div>Username: Mona_Kassulke14</div>
        <div>Password: EECsjlVnWIXfeuA</div>
      </Hint>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <FormGroup>
        <Input
          className={`form-control ${error === 'required' ? 'required' : ''}`}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            dispatch({
              type: 'field',
              fieldName: 'username',
              payload: e.currentTarget.value,
            })
          } />
      </FormGroup>

      <FormGroup>
        <Input
          className={`form-control ${error === 'required' ? 'required' : ''}`}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: 'field',
              fieldName: 'password',
              payload: e.currentTarget.value,
            })
          }
        />
      </FormGroup>

      <Button style={{ 'height': '50px' }} variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log In'}
      </Button>
    </LoginFormWrapper>
  );
}

export default Login
