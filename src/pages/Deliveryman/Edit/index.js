/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdDone } from 'react-icons/md';
import { Form } from '@unform/web';
import { Link, useParams } from 'react-router-dom';

import api from '~/services/api';

import Input from '~/components/Input';
import ImageInput from '../ImageInput';

import { editDeliverymanRequest } from '~/store/modules/deliveryman/actions';

import { Wrapper, Container, Table, SecondHeader } from './styles';

export default function EditDeliveryman() {
  const [page, setPage] = useState('all');
  const [dname, setDname] = useState('');
  const [defValue, setDefValue] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDefault() {
      const response = await api.get('/deliverers', {
        params: {
          page,
          dname,
        },
      });
      // const result = objArray.map(({ foo }) => foo);
      const defaultValue = response.data.filter(d => {
        if (d.id === +id) {
          return d;
        }
        return '';
      });

      setDefValue(defaultValue[0]);
    }

    loadDefault();
  }, []);

  async function handleSubmit({ name, email, avatar_id }) {
    dispatch(editDeliverymanRequest(name, email, avatar_id, +id));
  }

  return (
    <Wrapper>
      <Form initialData={defValue} onSubmit={handleSubmit}>
        <Container>
          <h1>Cadastro de entregadores</h1>
          <div>
            <Link to="/deliveryman">
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
          <ImageInput name="avatar_id" />
          <SecondHeader>
            <div>
              <h3>Nome</h3>
              <Input name="name" placeholder="Insira nome" />
            </div>
            <div>
              <h3>E-mail</h3>
              <Input name="email" placeholder="Insira E-mail" />
            </div>
          </SecondHeader>
        </Table>
      </Form>
    </Wrapper>
  );
}
