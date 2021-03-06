/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdDone } from 'react-icons/md';
import { Form } from '@unform/web';
import { Link, useParams } from 'react-router-dom';

import Input from '~/components/Input';
import api from '~/services/api';

import { editRecipientRequest } from '~/store/modules/recipient/actions';

import {
  Wrapper,
  Container,
  Table,
  FirstRow,
  SecondRow,
  ThirdRow,
} from './styles';

export default function EditRecipient() {
  const [page, setPage] = useState('all');
  const [rec, setRec] = useState('');
  const [defValue, setDefValue] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function loadDefault() {
      const response = await api.get('/recipients', {
        params: {
          page,
          rec,
        },
      });
      // const result = objArray.map(({ foo }) => foo);
      const defaultValue = response.data.filter(r => {
        if (r.id === +id) {
          return r;
        }
        return '';
      });

      setDefValue(defaultValue[0]);
    }

    loadDefault();
  }, []);

  async function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zip,
  }) {
    dispatch(
      editRecipientRequest(
        +id,
        name,
        street,
        number,
        complement,
        city,
        state,
        zip
      )
    );
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} initialData={defValue}>
        <Container>
          <h1>Edição de destinatários</h1>
          <div>
            <Link to="/recipients">
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
          <FirstRow>
            <h3>Nome</h3>
            <Input name="name" placeholder="Insira nome" />
          </FirstRow>
          <SecondRow>
            <div>
              <h3>Rua</h3>
              <Input name="street" placeholder="Insira Rua" />
            </div>
            <div>
              <h3>Numero</h3>
              <Input name="number" placeholder="Insira Número" />
            </div>
            <div>
              <h3>Complemento</h3>
              <Input name="complement" />
            </div>
          </SecondRow>
          <ThirdRow>
            <div>
              <h3>Cidade</h3>
              <Input name="city" placeholder="Insira Cidade" />
            </div>
            <div>
              <h3>Estado</h3>
              <Input name="state" placeholder="Insira E-mail" />
            </div>
            <div>
              <h3>CEP</h3>
              <Input name="zip" placeholder="Insira CEP" />
            </div>
          </ThirdRow>
        </Table>
      </Form>
    </Wrapper>
  );
}
