import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/fastfeet-logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />

          <Link active to="/dashboard">
            ENCOMENDAS
          </Link>
          <Link to="/deliverers">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/delivery/problems">PROBLEMAS</Link>
        </nav>

        <aside>
          <strong>Admin FastFeet</strong>
          <Link to="/">Sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}
