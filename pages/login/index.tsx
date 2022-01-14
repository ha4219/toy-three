import useInput from '@hooks/useInput';
import { Box, Button, TextField } from '@mui/material';
import React, { useCallback } from 'react';

const Login = () => {
  const [email, setEmail, onChangeEmail] = useInput('');
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <Box maxWidth="xl">
        <TextField type={'email'} label={'email'} value={email} onChange={onChangeEmail}/>
        <TextField type={'password'} label={'password'}/>
        <Button type="submit">submit</Button>
      </Box>
    </form>
  )
};

export default Login;