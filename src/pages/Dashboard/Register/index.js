/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { MdChevronLeft, MdDone } from 'react-icons/md';
// import AsyncSelect from 'react-select/async';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '~/components/Input';
import AsyncSelect from '~/components/AsyncSelect';

import api from '~/services/api';

import {
  Wrapper,
  Container,
  Table,
  FirstHeader,
  SecondHeader,
  customStyles,
  componentStyle,
  componentStyleProduct,
} from './styles';

export default function RegisterProduct() {
  const [page, setPage] = useState(1);
  const [prod, setProd] = useState('');
  const [rec, setRec] = useState('');
  const [dname, setDname] = useState('');

  const filterRecData = async inputValue => {
    const response = await api.get('recipients', {
      params: {
        page,
        rec,
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

  const promiseRecOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterRecData(inputValue));
    });

  const filterDelData = async inputValue => {
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

  const promiseDelOptions = inputValue =>
    new Promise(resolve => {
      resolve(filterDelData(inputValue));
    });

  function handleRecipientSelection(value) {
    if (value === null) {
      return setRec('');
    }
    return setRec([value.value]);
  }

  function handleDeliverymanSelection(value) {
    if (value === null) {
      return setDname('');
    }
    return setDname([value.value]);
  }

  function handleSubmit(data) {
    console.tron.log(`DATA: ${JSON.stringify(data)}`);
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Container>
          <h1>Cadastro de encomendas</h1>
          <div>
            <Link to="/dashboard">
              <button type="button">
                <MdChevronLeft size={30} color="#fff" />
                VOLTAR
              </button>
            </Link>
            <button type="submit">
              <MdDone size={30} color="#fff" />
              SALVAR
            </button>
          </div>
        </Container>

        <Table>
          <FirstHeader>
            <div>
              Destinatário
              <AsyncSelect
                name="recipient"
                cacheOptions
                defaultOptions
                loadOptions={promiseRecOptions}
                styles={customStyles}
                placeholder="Insira Destinatário"
                isClearable
                onChange={handleRecipientSelection}
                components={componentStyle}
              />
            </div>

            <div>
              Entregador
              <AsyncSelect
                name="deliveryman"
                cacheOptions
                defaultOptions
                loadOptions={promiseDelOptions}
                styles={customStyles}
                placeholder="Insira Entregador"
                isClearable
                onChange={handleDeliverymanSelection}
                components={componentStyle}
              />
            </div>
          </FirstHeader>
          <SecondHeader>
            Nome do produto
            <Input name="product" />
          </SecondHeader>
        </Table>
      </Form>
    </Wrapper>
  );
}
