import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '~/assets/images/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />

          <NavLink activeClassName="current" to="/dashboard">
            ENCOMENDAS
          </NavLink>
          <NavLink activeClassName="current" to="/deliveryman">
            ENTREGADORES
          </NavLink>
          <NavLink activeClassName="current" to="/recipients">
            DESTINATÁRIOS
          </NavLink>
          <NavLink activeClassName="current" to="/delivery/problems">
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <strong>Admin FastFeet</strong>
          <Link to="/">Sair do sistema</Link>
        </aside>
      </Content>
    </Container>
  );
}
