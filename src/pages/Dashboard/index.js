/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdAdd } from 'react-icons/md';
import { IconContext } from 'react-icons';
import ColorScheme from 'color-scheme';
import nameInitials from 'name-initials';
import AsyncSelect from 'react-select/async';

import api from '~/services/api';

import Options from '~/components/Options';

import {
  Wrapper,
  Container,
  Table,
  THeader,
  TRow,
  StatusTag,
  Avatar,
  customStyles,
  componentStyle,
} from './styles';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [prod, setProd] = useState('');

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

      /** DELIVERY STATUS CHECK */
      const data = response.data.map(p => {
        if (p.id < 10) {
          p.id = `0${p.id}`;
        }

        let status = 'PENDENTE';

        if (p.canceled_at != null) {
          status = 'CANCELADA';
        } else if (p.start_date != null && p.end_date == null) {
          status = 'RETIRADA';
        } else if (p.start_date != null && p.end_date != null) {
          status = 'ENTREGUE';
        }

        return {
          ...p,
          primary: colors[Math.floor(Math.random() * colors.length)],
          initials: nameInitials(p.deliverer.name),
          status,
          visible: false,
        };
      });

      setProducts(data);
    }

    loadProducts();
  }, [prod]);

  function handleToggleVisible(id) {
    setProducts(
      products.map(p => {
        if (p.id === id) {
          return { ...p, visible: !p.visible };
        }
        return p;
      })
    );
  }

  const filterData = async inputValue => {
    const response = await api.get('products', {
      params: {
        page,
        prod,
      },
    });

    const data = response.data.map(p => {
      return {
        value: p.product,
        label: p.product,
      };
    });

    return data.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterData(inputValue));
    });

  function handleSelection(value) {
    if (value === null) {
      return setProd('');
    }
    return setProd([value.value]);
  }

  return (
    <Wrapper>
      <h1>Gerenciando encomendas</h1>
      <Container>
        <AsyncSelect
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          styles={customStyles}
          placeholder="Buscar por encomendas"
          isClearable
          onChange={handleSelection}
          components={componentStyle}
        />

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
              <Avatar color={`#${product.primary}`}>
                <p>{product.initials}</p>
              </Avatar>
              <p>{product.deliverer.name}</p>
            </div>
            <div>{product.recipient.city}</div>
            <div>{product.recipient.state}</div>
            <div>
              <StatusTag status={product.status}>
                <div />
                {product.status}
              </StatusTag>
            </div>
            <IconContext.Provider value={{ className: 'icon' }}>
              <div>
                <MdMoreHoriz
                  onClick={() => handleToggleVisible(product.id)}
                  size={30}
                  color="#C6C6C6"
                />
                <Options visible={product.visible} />
              </div>
            </IconContext.Provider>
          </TRow>
        ))}
      </Table>
    </Wrapper>
  );
}
