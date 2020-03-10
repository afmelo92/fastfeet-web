/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdAdd } from 'react-icons/md';
import ColorScheme from 'color-scheme';
import nameInitials from 'name-initials';

import api from '~/services/api';

import Options from '~/components/Options';
import Select from '~/components/Select';

import {
  Wrapper,
  Container,
  Table,
  THeader,
  TRow,
  StatusTag,
  Avatar,
} from './styles';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [prod, setProd] = useState('');
  const [visible, setVisible] = useState(false);

  /**
   * RANDOM COLOR GENERATOR FOR NAME AVATAR
   */
  const scheme = new ColorScheme();
  scheme
    .from_hue(21)
    .scheme('tetrade')
    .distance(0.8)
    .variation('light');

  const colors = scheme.colors();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products', {
        params: {
          page,
          prod,
        },
      });

      const data = response.data.map(p => ({
        ...p,
        firstname: p.deliverer.name.split(' ')[0],
        lastname: p.deliverer.name.split(' ')[1],
        primary: colors[Math.floor(Math.random() * colors.length)],
        initials: nameInitials(p.deliverer.name),
      }));

      console.tron.log(`PRODUCTS: ${data}`);
      setProducts(data);
    }
    console.tron.log(`PRODUCTS: ${products}`);

    loadProducts();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Wrapper>
      <h1>Gerenciando encomendas</h1>
      <Container>
        <Select type="text" placeholder="Buscar por encomendas" />
        <button type="button">
          <MdAdd size={30} color="#fff" />
          <p>CADASTRAR</p>
        </button>
      </Container>

      <Table>
        <THeader>
          <div>ID</div>
          <div>Destinatário</div>
          <div>Entregador</div>
          <div>Cidade</div>
          <div>Estado</div>
          <div>Status</div>
          <div>Ações</div>
        </THeader>
        {products.map(product => (
          <TRow key={product.id}>
            <div>#{product.id}</div>
            <div>{product.recipient.name}</div>
            <div>
              {/**
               * <img
                width="35"
                src={`https://ui-avatars.com/api/?name=${product.firstname}+${product.lastname}&background=${product.primary}&color=${product.secondary}`}
                alt=""
              />
               */}
              <Avatar color={`#${product.primary}`}>
                <p>{product.initials}</p>
              </Avatar>
              <p>{product.deliverer.name}</p>
            </div>
            <div>{product.recipient.city}</div>
            <div>{product.recipient.state}</div>
            <div>
              <StatusTag>
                <div />
                ENTREGUE
              </StatusTag>
            </div>
            <div>
              <button onClick={handleToggleVisible} type="button">
                <MdMoreHoriz size={30} color="#C6C6C6" />
                <Options visible={visible} />
              </button>
            </div>
          </TRow>
        ))}
      </Table>
    </Wrapper>
  );
}
