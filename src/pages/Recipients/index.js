/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { MdMoreHoriz, MdAdd } from 'react-icons/md';
import AsyncSelect from 'react-select/async';

import api from '~/services/api';

import Options from '~/components/Options';

import {
  Wrapper,
  Container,
  Table,
  THeader,
  TRow,
  customStyles,
  componentStyle,
} from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [rec, setRec] = useState('');

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('recipients', {
        params: {
          page,
          rec,
        },
      });

      /** DELIVERY STATUS CHECK */
      const data = response.data.map(r => {
        if (r.id < 10) {
          r.id = `0${r.id}`;
        }
        return {
          ...r,
          visible: false,
        };
      });

      setRecipients(data);
    }

    loadProducts();
  }, [rec, page]);

  function handleToggleVisible(id) {
    setRecipients(
      recipients.map(r => {
        if (r.id === id) {
          return { ...r, visible: !r.visible };
        }
        return r;
      })
    );
  }

  const filterData = async inputValue => {
    const response = await api.get('recipients', {
      params: {
        page,
        rec,
      },
    });

    const data = response.data.map(r => {
      return {
        value: r.name,
        label: r.name,
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
      return setRec('');
    }
    return setRec([value.value]);
  }

  return (
    <Wrapper>
      <h1>Gerenciando destinatários</h1>
      <Container>
        <AsyncSelect
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          styles={customStyles}
          placeholder="Buscar por destinatários"
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
          <div>Nome</div>
          <div>Endereço</div>
          <div>Ações</div>
        </THeader>
        {recipients.map(recipient => (
          <TRow key={recipient.id}>
            <div>#{recipient.id}</div>
            <div>
              <p>{recipient.name}</p>
            </div>
            <div>{`${recipient.street} ${recipient.number} - ${recipient.complement} - ${recipient.city}`}</div>
            <div>
              <MdMoreHoriz
                onClick={() => handleToggleVisible(recipient.id)}
                size={30}
                color="#C6C6C6"
              />
              <Options visible={recipient.visible} />
            </div>
          </TRow>
        ))}
      </Table>
    </Wrapper>
  );
}
