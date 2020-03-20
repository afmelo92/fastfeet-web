/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdDone } from 'react-icons/md';
import ColorScheme from 'color-scheme';
import nameInitials from 'name-initials';
import AsyncSelect from 'react-select/async';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import Options from '~/components/Options';

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

export default function EditProduct() {
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
      <Container>
        <h1>Cadastro de encomendas</h1>
        <div>
          <Link to="/dashboard">
            <button type="button">
              <MdChevronLeft size={30} color="#fff" />
              VOLTAR
            </button>
          </Link>
          <button type="button">
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
              cacheOptions
              defaultOptions
              loadOptions={promiseOptions}
              styles={customStyles}
              placeholder="Insira Destinatário"
              isClearable
              onChange={handleSelection}
              components={componentStyle}
            />
          </div>

          <div>
            Entregador
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={promiseOptions}
              styles={customStyles}
              placeholder="Insira Entregador"
              isClearable
              onChange={handleSelection}
              components={componentStyle}
            />
          </div>
        </FirstHeader>
        <SecondHeader>
          <div>
            Nome do produto
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={promiseOptions}
              styles={customStyles}
              placeholder="Insira produto"
              isClearable
              onChange={handleSelection}
              components={componentStyleProduct}
            />
          </div>
        </SecondHeader>
      </Table>
    </Wrapper>
  );
}
