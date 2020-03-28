/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdDone } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '~/components/Input';
import AsyncSelect from '~/components/AsyncSelect';

import { registerProductRequest } from '~/store/modules/product/actions';

import api from '~/services/api';

import {
  Wrapper,
  Container,
  Table,
  FirstHeader,
  SecondHeader,
  customStyles,
  componentStyle,
} from './styles';

export default function EditProduct() {
  const [page, setPage] = useState('all');
  const [rec, setRec] = useState('');
  const [dname, setDname] = useState('');
  const [defValue, setDefValue] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function loadDefault() {
      const response = await api.get('/products', {
        params: {
          page,
          prod: '',
        },
      });
      // const result = objArray.map(({ foo }) => foo);
      const defaultValue = response.data.filter(p => {
        if (p.id === +id) {
          return p.product;
        }
        return '';
      });

      setDefValue(defaultValue[0].product);
    }

    loadDefault();
  }, []);

  const filterRecData = async inputValue => {
    const response = await api.get('recipients', {
      params: {
        page,
        rec,
      },
    });

    const data = response.data.map(r => {
      return {
        value: { name: r.name, id: r.id },
        label: r.name,
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
        value: { name: d.name, id: d.id },
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

  async function handleSubmit({ recipient, deliveryman, product }) {
    dispatch(registerProductRequest(recipient, deliveryman, product));
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Container>
          <h1>Edição de encomendas</h1>
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
            <Input
              name="product"
              placeholder="Insira Produto"
              defaultValue={defValue}
            />
          </SecondHeader>
        </Table>
      </Form>
    </Wrapper>
  );
}
