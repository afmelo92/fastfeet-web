/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronLeft, MdDone } from 'react-icons/md';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '~/components/Input';
import ImageInput from '../ImageInput';

import { registerDeliverymanRequest } from '~/store/modules/deliveryman/actions';

import { Wrapper, Container, Table, SecondHeader } from './styles';

export default function RegisterDeliveryman() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, email }) {
    console.tron.log(`NAME: ${name}`);
    console.tron.log(`EMAIL: ${email}`);
    // dispatch(registerDeliverymanRequest(name, email));
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
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
          <div>
            <ImageInput name="avatar" placeholder="IMAGE" />
          </div>
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
