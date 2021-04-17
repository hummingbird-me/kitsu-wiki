import React, { ReactElement, useContext, useState } from 'react';
import loginWithPassword from 'src/actions/loginWithPassword';
import { SessionContext } from 'src/contexts/SessionContext';
import LabelInput from '../ui/input/LabelInput';
import { Input, InputGroup } from '../ui/input/styles';

export default function LoginForm(): ReactElement {
  const { setSession } = useContext(SessionContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const params = {
      username: email,
      password: password,
    };

    await loginWithPassword(params).then((response) => {
      setSession(response);
    });

    history.pushState(null, '', '/search'); // eslint-disable-line
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <LabelInput fieldType='email' />

        <Input key='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>

      <InputGroup>
        <LabelInput fieldType='password' />

        <Input
          key='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>

      <input type='submit' value='Submit' />
    </form>
  );
}
