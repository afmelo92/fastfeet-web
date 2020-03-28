/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdAdd } from 'react-icons/md';
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
  Avatar,
  customStyles,
  componentStyle,
  RegLink,
} from './styles';

// import { Container } from './styles';

export default function Deliveryman() {
  const [deliverers, setDeliverers] = useState([]);
  const [page, setPage] = useState(1);
  const [dname, setDname] = useState('');

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
    async function loadDeliverers() {
      const response = await api.get('deliverers', {
        params: {
          page,
          dname,
        },
      });

      /** DELIVERY STATUS CHECK */
      const data = response.data.map(d => {
        if (d.id < 10) {
          d.id = `0${d.id}`;
        }
        return {
          ...d,
          avatar: d.avatar.url,
          primary: colors[Math.floor(Math.random() * colors.length)],
          initials: nameInitials(d.name),
          visible: false,
        };
      });

      setDeliverers(data);
    }

    loadDeliverers();
  }, [dname]);

  function handleToggleVisible(id) {
    setDeliverers(
      deliverers.map(d => {
        if (d.id === id) {
          return { ...d, visible: !d.visible };
        }
        return d;
      })
    );
  }

  const filterData = async inputValue => {
    const response = await api.get('deliverers', {
      params: {
        page,
        dname,
      },
    });

    const data = response.data.map(d => {
      return {
        value: d.name,
        label: d.name,
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
      return setDname('');
    }
    return setDname([value.value]);
  }

  return (
    <Wrapper>
      <h1>Gerenciando entregadores</h1>
      <Container>
        <AsyncSelect
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          styles={customStyles}
          placeholder="Buscar por entregadores"
          isClearable
          onChange={handleSelection}
          components={componentStyle}
        />

        <button type="button">
          <MdAdd size={30} color="#fff" />
          <RegLink to="/deliveryman/register">CADASTRAR</RegLink>
        </button>
      </Container>

      <Table>
        <THeader>
          <div>ID</div>
          <div>Foto</div>
          <div>Nome</div>
          <div>Email</div>
          <div>Ações</div>
        </THeader>
        {deliverers.map(deliverer => (
          <TRow key={deliverer.id}>
            <div>#{deliverer.id}</div>
            <div>
              {deliverer.avatar ? (
                <img src={deliverer.avatar} alt="" />
              ) : (
                <Avatar color={`#${deliverer.primary}`}>
                  <p>{deliverer.initials}</p>
                </Avatar>
              )}
            </div>
            <div>
              <p>{deliverer.name}</p>
            </div>
            <div>{deliverer.email}</div>
            <div>
              <MdMoreHoriz
                onClick={() => handleToggleVisible(deliverer.id)}
                size={30}
                color="#C6C6C6"
              />
              <Options
                visible={deliverer.visible}
                id={deliverer.id}
                path="deliveryman"
              />
            </div>
          </TRow>
        ))}
      </Table>
    </Wrapper>
  );
}
