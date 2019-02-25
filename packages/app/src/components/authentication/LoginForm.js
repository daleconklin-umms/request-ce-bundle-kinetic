import React from 'react';
import { compose, withHandlers } from 'recompose';
import { login } from '../../utils/authentication';

export const Login = ({
  handleLogin,
  toResetPassword,
  toCreateAccount,
  email,
  password,
  handleEmail,
  handlePassword,
  error,
  routed,
}) => (
  <form className="login-form-container" onSubmit={handleLogin}>
    <h3>Sign In</h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="form-group">
        <label htmlFor="email">UMMS Active Directory Username</label>
        <input
          type="text"
          autoFocus
          className="form-control"
          id="email"
          placeholder="wally"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <span className="text-danger">{error || ' '}</span>
    </div>
    <div className="button-group">
      <button className="btn btn-primary">Sign In</button>
      <hr />
    </div>
  </form>
);

const handleLogin = ({ tryAuthentication, email, password }) => e => {
  e.preventDefault();
  tryAuthentication(email, password);
};
const tryAuthentication = ({
  setError,
  setPassword,
  handleAuthenticated,
  routed,
  push,
}) => async (username, password) => {
  try {
    await login(username, password);

    handleAuthenticated();

    if (routed) {
      push('/kapps/services');
    }
  } catch (error) {
    setError('Invalid username or password.');
    setPassword('');
  }
};

export const LoginForm = compose(
  withHandlers({
    tryAuthentication,
  }),
  withHandlers({
    handleLogin,
  }),
)(Login);
