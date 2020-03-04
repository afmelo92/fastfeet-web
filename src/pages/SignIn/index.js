import React from 'react';

import logo from '~/assets/images/fastfeet-logo.png';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <form>
        <div>SEU E-MAIL</div>
        <input type="email" placeholder="exemplo@email.com" />
        <div>SUA SENHA</div>
        <input type="password" placeholder="***********" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
