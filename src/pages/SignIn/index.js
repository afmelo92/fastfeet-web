import React from 'react';
import { Form } from '@unform/web';
import Input from '~/components/Input';

import logo from '~/assets/images/fastfeet-logo.png';

// import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form onSubmit={handleSubmit}>
        <div>SEU E-MAIL</div>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <div>SUA SENHA</div>
        <Input name="password" type="password" placeholder="***********" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
