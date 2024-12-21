// src/components/feature/Auth/Auth.tsx
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useForm from '../../../hooks/useForm';
import Input from '../../common/input/Input';
import Button from '../../common/button';

const Auth: React.FC = () => {
  const { login } = useAuth();
  const [error, setError] = useState<string>('');

  const { formState, handleChange, handleSubmit, errors } = useForm({
    initialValues: { username: '' },
    onSubmit: (values) => {
      // 로그인 로직
      const { username } = values;
      if (username) {
        login(username);
      } else {
        setError('Username is required');
      }
    },
    validators: {
      username: (value) => (value ? undefined : 'Username is required'),
    },
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name='username'
          value={formState.username}
          onChange={handleChange}
          placeholder="Enter your username"
          error={errors.username || error}
          size="medium"
          variant="outlined"
        />
        <Button type="submit" variant="filled">
          Login
        </Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Auth;
